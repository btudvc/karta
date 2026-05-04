// Karta brand asset generator
// Design: 8 rounded blocks forming a "K" + amber accent dot, on a navy rounded square.
// Outputs:
//   - assets/icon.ico  (multi-size PNG-in-ICO: 16/32/48/256)
//   - assets/logo.png  (512x512, used in app header)
const fs   = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// ── Design tokens (in 512x512 coordinate space) ──────────────
const BG = [0x0F, 0x17, 0x2A];                                          // navy slate-900
const BG_RECT = { x: 40, y: 40, w: 432, h: 432, r: 64 };
const BLOCK_SIZE = 64;
const BLOCK_R    = 12;
const BLOCKS = [
  // Left bar — indigo gradient (top → bottom)
  { x: 120, y: 120, color: [0x31, 0x2E, 0x81] },                        // indigo-900
  { x: 120, y: 200, color: [0x43, 0x38, 0xCA] },                        // indigo-700
  { x: 120, y: 280, color: [0x5B, 0x21, 0xB6] },                        // violet-800
  { x: 120, y: 360, color: [0x6D, 0x28, 0xD9] },                        // violet-700
  // Diagonals — crimson/rose
  { x: 200, y: 200, color: [0x9F, 0x12, 0x39] },                        // rose-900
  { x: 280, y: 120, color: [0xBE, 0x12, 0x3C] },                        // rose-700
  { x: 200, y: 280, color: [0xBE, 0x12, 0x3C] },
  { x: 280, y: 360, color: [0xE1, 0x1D, 0x48] },                        // rose-600
];
const DOT = { cx: 380, cy: 152, r: 14, color: [0xD9, 0x77, 0x06] };     // amber-600

// ── Anti-aliased drawing primitives ──────────────────────────
function fillRoundedRect(set, x0, y0, w, h, r, color) {
  const x1 = x0 + w, y1 = y0 + h;
  const yStart = Math.max(0, Math.floor(y0 - 1));
  const yEnd   = Math.ceil(y1 + 1);
  const xStart = Math.max(0, Math.floor(x0 - 1));
  const xEnd   = Math.ceil(x1 + 1);
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      // Closest point on inset rect to (x+.5, y+.5)
      const cx = Math.max(x0 + r, Math.min(x + 0.5, x1 - r));
      const cy = Math.max(y0 + r, Math.min(y + 0.5, y1 - r));
      const dx = (x + 0.5) - cx;
      const dy = (y + 0.5) - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d <= r - 0.5)        set(x, y, color, 255);
      else if (d < r + 0.5)    set(x, y, color, Math.round(255 * (r + 0.5 - d)));
    }
  }
}
function fillCircle(set, cx, cy, r, color) {
  const x0 = Math.max(0, Math.floor(cx - r - 1));
  const y0 = Math.max(0, Math.floor(cy - r - 1));
  const x1 = Math.ceil(cx + r + 1);
  const y1 = Math.ceil(cy + r + 1);
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const dx = (x + 0.5) - cx, dy = (y + 0.5) - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d <= r - 0.5)        set(x, y, color, 255);
      else if (d < r + 0.5)    set(x, y, color, Math.round(255 * (r + 0.5 - d)));
    }
  }
}

// ── Composite the design at any size ─────────────────────────
function drawDesign(size, set) {
  const s = size / 512;
  fillRoundedRect(set, BG_RECT.x * s, BG_RECT.y * s, BG_RECT.w * s, BG_RECT.h * s, BG_RECT.r * s, BG);
  for (const b of BLOCKS) {
    fillRoundedRect(set, b.x * s, b.y * s, BLOCK_SIZE * s, BLOCK_SIZE * s, BLOCK_R * s, b.color);
  }
  fillCircle(set, DOT.cx * s, DOT.cy * s, DOT.r * s, DOT.color);
}

// ── PNG generation with alpha blending ───────────────────────
function createPNG(size) {
  const png = new PNG({ width: size, height: size });
  png.data.fill(0); // transparent
  const buf = png.data;
  function set(x, y, color, alpha) {
    if (x < 0 || x >= size || y < 0 || y >= size || alpha <= 0) return;
    const off = (y * size + x) * 4;
    if (alpha >= 255) {
      buf[off] = color[0]; buf[off+1] = color[1]; buf[off+2] = color[2]; buf[off+3] = 255;
      return;
    }
    const aSrc = alpha / 255;
    const aDst = buf[off+3] / 255;
    const aOut = aSrc + aDst * (1 - aSrc);
    if (aOut === 0) return;
    buf[off]   = Math.round((color[0] * aSrc + buf[off]   * aDst * (1 - aSrc)) / aOut);
    buf[off+1] = Math.round((color[1] * aSrc + buf[off+1] * aDst * (1 - aSrc)) / aOut);
    buf[off+2] = Math.round((color[2] * aSrc + buf[off+2] * aDst * (1 - aSrc)) / aOut);
    buf[off+3] = Math.round(aOut * 255);
  }
  drawDesign(size, set);
  return PNG.sync.write(png);
}

// ── Main: write logo.png and icon.ico ────────────────────────
(async () => {
  const outDir = __dirname;
  // logo.png at 512
  fs.writeFileSync(path.join(outDir, 'logo.png'), createPNG(512));

  // icon.ico — multi-size PNG-in-ICO via png-to-ico (Vista+ supports PNG inside ICO)
  const sizes = [16, 32, 48, 64, 128, 256];
  const pngBuffers = sizes.map(s => createPNG(s));
  const pngToIco = (await import('png-to-ico')).default;
  const icoBuf = await pngToIco(pngBuffers);
  fs.writeFileSync(path.join(outDir, 'icon.ico'), icoBuf);
  console.log('✓ icon.ico (' + sizes.join(',') + ') and logo.png generated');
})();
