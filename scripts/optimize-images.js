/**
 * Image Optimization Script
 * 
 * This script optimizes images in the public directory and generates
 * multiple sizes for responsive images.
 * 
 * Usage:
 * node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const config = {
  inputDir: 'public',
  outputDir: 'public/images',
  sizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  formats: ['webp', 'avif'],
  quality: 80
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Find all images in the input directory
const imageFiles = glob.sync(`${config.inputDir}/**/*.{jpg,jpeg,png,gif}`, {
  ignore: [`${config.outputDir}/**`]
});

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
(async () => {
  for (const imagePath of imageFiles) {
    const filename = path.basename(imagePath);
    const name = path.parse(filename).name;
    const outputPath = path.join(config.outputDir, name);
    
    // Create directory for this image if it doesn't exist
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    try {
      // Load the image
      const image = sharp(imagePath);
      const metadata = await image.metadata();
      
      // Generate a low-quality placeholder for blur-up effect
      await image
        .resize(20)
        .blur(10)
        .webp({ quality: 20 })
        .toFile(path.join(outputPath, `${name}-placeholder.webp`));
      
      // Generate different sizes and formats
      for (const size of config.sizes) {
        // Skip sizes larger than the original image
        if (size > metadata.width) continue;
        
        for (const format of config.formats) {
          await image
            .resize(size)
            .toFormat(format, { quality: config.quality })
            .toFile(path.join(outputPath, `${name}-${size}.${format}`));
        }
      }
      
      // Also save the original size in new formats
      for (const format of config.formats) {
        await image
          .toFormat(format, { quality: config.quality })
          .toFile(path.join(outputPath, `${name}.${format}`));
      }
      
      console.log(`✓ Optimized: ${filename}`);
    } catch (error) {
      console.error(`✗ Error optimizing ${filename}:`, error);
    }
  }
  
  console.log('Image optimization complete!');
})();
