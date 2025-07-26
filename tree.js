const fs = require('fs');

// Lê o arquivo markdown
const conteudo = fs.readFileSync('readme.md', 'utf-8');

// Separa o conteúdo em linhas
const linhas = conteudo.split('\n');

// Filtra as linhas que são títulos (começam com '#')
const titulos = linhas.filter(linha => linha.trim().startsWith('#'));

// Mostra os títulos encontrados
titulos.forEach(titulo => {
  console.log(titulo.trim());
});
