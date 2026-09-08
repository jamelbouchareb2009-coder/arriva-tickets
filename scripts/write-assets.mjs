#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const FILES = [
  ["assets-b64/ticket-qr.b64", "public/ticket-qr.png"],
  ["assets-b64/ticket-meta.b64", "public/ticket-meta.png"],
  ["assets-b64/product-title.b64", "public/product-title.png"],
  ["assets-b64/clock.b64", "public/icons/clock.png"],
  ["assets-b64/lock.b64", "public/icons/lock.png"],
  ["assets-b64/card-info.b64", "public/icons/card-info.png"],
  ["assets-b64/validation.b64", "public/icons/validation.png"],
  ["assets-b64/roboto.b64", "public/fonts/roboto.woff2"],
];

for (const [srcRel, destRel] of FILES) {
  const src = join(root, srcRel);
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(readFileSync(src, "utf8"), "base64"));
  console.log("[write-assets]", destRel);
}
