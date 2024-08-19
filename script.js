const colorPicker = document.getElementById('colorPicker');
const hexInput = document.getElementById('hexInput');
const rgbaInput = document.getElementById('rgbaInput');
const hslInput = document.getElementById('hslInput');
const paletteList = document.querySelector('.palette-list');

function updatePreview() {
  const color = chroma(colorPicker.value);
  hexInput.textContent = color.hex();
  rgbaInput.textContent = color.rgba().join(', ');
  hslInput.textContent = color.hsl().join(', ');
}

function generateComplementaryPalette() {
  const color = chroma(colorPicker.value);
  const palette = color.analogous();

  // Créer une nouvelle liste pour la palette
  const newPaletteList = document.createElement('ul');
  palette.forEach(color => {
    const colorItem = document.createElement('li');
    colorItem.style.backgroundColor = color.hex();
    newPaletteList.appendChild(colorItem);
  });

  paletteList.appendChild(newPaletteList);
}

function savePalette() {
  // ... (même code que précédemment, en utilisant chroma.js pour les couleurs)
}

function loadPalettes() {
  // ... (même code que précédemment)
}

colorPicker.addEventListener('input', updatePreview);