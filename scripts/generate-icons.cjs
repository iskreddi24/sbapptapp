const fs = require('fs');
const path = require('path');

const SIZES = [192, 512];
const SOURCE = path.join(__dirname, '..', 'public', 'SBALOGO.png');
const OUT_DIR = path.join(__dirname, '..', 'public', 'icons');

async function generate() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    console.log('Place your logo at public/SBALOGO.png and re-run.');
    process.exit(1);
  }

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  try {
    const sharp = require('sharp');
    for (const size of SIZES) {
      const out = path.join(OUT_DIR, `icon-${size}x${size}.png`);
      await sharp(SOURCE)
        .resize(size, size, { fit: 'contain', background: { r: 30, g: 41, b: 59, alpha: 1 } })
        .png()
        .toFile(out);
      console.log(`✓ Generated ${out}`);
    }
    console.log('\nDone! Icons generated.');
  } catch (e) {
    console.log('sharp not available. Generate manually:');
    SIZES.forEach((s) => console.log(`  public/icons/icon-${s}x${s}.png`));
    console.log('  convert public/SBALOGO.png -resize 192x192 public/icons/icon-192x192.png');
    console.log('  convert public/SBALOGO.png -resize 512x512 public/icons/icon-512x512.png');
  }
}

generate();
