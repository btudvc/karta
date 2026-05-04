// B-Less brand asset generator
// Renders assets/logo.svg → assets/logo.png (512px) and assets/icon.ico (multi-size)
const fs   = require('fs');
const path = require('path');
const sharp = require('sharp');

const here = __dirname;
const svgPath = path.join(here, 'logo.svg');
const pngPath = path.join(here, 'logo.png');
const icoPath = path.join(here, 'icon.ico');

(async () => {
  const svg = fs.readFileSync(svgPath);

  // Main 512x512 PNG (used in app header, manifest, apple-touch-icon)
  await sharp(svg).resize(512, 512).png().toFile(pngPath);
  console.log('✓ logo.png');

  // Multi-size PNG → ICO via png-to-ico
  const sizes = [16, 32, 48, 64, 128, 256];
  const buffers = await Promise.all(
    sizes.map(s => sharp(svg).resize(s, s).png().toBuffer())
  );
  const pngToIco = (await import('png-to-ico')).default;
  const icoBuf = await pngToIco(buffers);
  fs.writeFileSync(icoPath, icoBuf);
  console.log('✓ icon.ico (' + sizes.join(',') + ')');
})();
