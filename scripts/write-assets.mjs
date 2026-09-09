#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const b64Dir = join(root, "assets-b64");

const FILES = [
  ["ticket-qr", "public/ticket-qr.png"],
  ["ticket-meta", "public/ticket-meta.png"],
  ["product-title", "public/product-title.png"],
  ["clock", "public/icons/clock.png"],
  ["lock", "public/icons/lock.png"],
  ["card-info", "public/icons/card-info.png"],
  ["validation", "public/icons/validation.png"],
  ["roboto", "public/fonts/roboto.woff2"],
];

function readB64(name) {
  const single = join(b64Dir, `${name}.b64`);
  if (existsSync(single)) return readFileSync(single, "utf8").replace(/\s+/g, "");
  if (!existsSync(b64Dir)) return null;
  const parts = readdirSync(b64Dir)
    .filter((f) => f.startsWith(`${name}.part`))
    .sort();
  if (parts.length === 0) return null;
  return parts.map((f) => readFileSync(join(b64Dir, f), "utf8")).join("").replace(/\s+/g, "");
}

for (const [name, destRel] of FILES) {
  const b64 = readB64(name);
  if (!b64) {
    console.warn("[write-assets] missing", name, "— skip");
    continue;
  }
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(b64, "base64"));
  console.log("[write-assets]", destRel, Buffer.from(b64, "base64").length, "bytes");
}
