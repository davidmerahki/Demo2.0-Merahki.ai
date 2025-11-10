import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examplesDir = path.join(__dirname, '..', 'public', 'examples');

const requiredImages = [
  'hubspot-academy.jpg',
  'salesforce-results.jpg',
  '30x-voice-agents.jpg',
  'novo-nordisk-diabetes.jpg',
  'pmi-bogota-panel.jpg'
];

console.log('🔍 Verificando imágenes de la galería...\n');

let allPresent = true;

requiredImages.forEach((image) => {
  const imagePath = path.join(examplesDir, image);
  const exists = fs.existsSync(imagePath);
  
  if (exists) {
    const stats = fs.statSync(imagePath);
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${image} - ${sizeInKB} KB`);
  } else {
    console.log(`❌ ${image} - NO ENCONTRADA`);
    allPresent = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPresent) {
  console.log('✅ Todas las imágenes están presentes!');
  console.log('La galería está lista para usar.');
} else {
  console.log('⚠️  Faltan algunas imágenes.');
  console.log('\nPor favor, agrega las imágenes faltantes en:');
  console.log(examplesDir);
  console.log('\nConsulta el archivo README.md en esa carpeta para más detalles.');
}

console.log('='.repeat(50) + '\n');
