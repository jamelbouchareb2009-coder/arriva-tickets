#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

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

function loadB64(stem) {
  const single = join(root, "assets-b64", `${stem}.b64`);
  if (existsSync(single)) return readFileSync(single, "utf8").replace(/\s+/g, "");
  const parts = [];
  for (let i = 0; ; i++) {
    const p = join(root, "assets-b64", `${stem}.part${String(i).padStart(2, "0")}`);
    if (!existsSync(p)) break;
    parts.push(readFileSync(p, "utf8").replace(/\s+/g, ""));
  }
  return parts.join("");
}

for (const [stem, destRel] of FILES) {
  const b64 = loadB64(stem);
  if (!b64) {
    console.warn("[write-assets] missing", stem, "— skip");
    continue;
  }
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(b64, "base64"));
  console.log("[write-assets]", destRel, Buffer.from(b64, "base64").length, "bytes");
}
