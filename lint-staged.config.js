module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.json': ['prettier --write --parser json'],
  '*.md': ['prettier --write --parser markdown'],
  '*.{ts,tsx}': ['prettier --write', 'eslint --fix'],
};
