// B-Less brand asset generator
// Source of truth: assets/b-less-icon-v3.png
// Outputs: b-less-icon-v3-512.png (header/manifest), icon.ico (multi-size)
const fs   = require('fs');
const path = require('path');
const sharp = require('sharp');

const here = __dirname;
const srcPath = path.join(here, 'b-less-icon-v3.png');
const out512  = path.join(here, 'b-less-icon-v3-512.png');
const icoPath = path.join(here, 'icon.ico');

(async () => {
  // Trim whitespace around the source so we work from a tight bounding box.
  // Then add generous padding so the logo lives inside the PWA "safe zone"
  // (center ~80% circle) — without this, OS round/squircle masks crop the
  // bottom "B-Less" text out.
  const trimmed = await sharp(srcPath).trim({ threshold: 12 }).toBuffer();
  const meta = await sharp(trimmed).metadata();
  const pad = Math.round(Math.max(meta.width, meta.height) * 0.22);
  const padded = await sharp(trimmed)
    .extend({ top: pad, bottom: pad, left: pad, right: pad,
              background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  await sharp(padded)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(out512);
  console.log('✓ b-less-icon-v3-512.png');

  const sizes = [16, 32, 48, 64, 128, 256];
  const buffers = await Promise.all(
    sizes.map(s => sharp(padded)
      .resize(s, s, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toBuffer())
  );
  const pngToIco = (await import('png-to-ico')).default;
  fs.writeFileSync(icoPath, await pngToIco(buffers));
  console.log('✓ icon.ico (' + sizes.join(',') + ')');
})();
