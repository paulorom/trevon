const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Diretório onde estão os arquivos .mdx
const directory = '../posts';

// Função para renomear e converter a data
function renameAndConvertDate(data) {
  const months = {
    Janeiro: '01',
    Fevereiro: '02',
    Março: '03',
    Abril: '04',
    Maio: '05',
    Junho: '06',
    Julho: '07',
    Agosto: '08',
    Setembro: '09',
    Outubro: '10',
    Novembro: '11',
    Dezembro: '12',
  };

  const dateParts = data.date.split(' ');
  const year = dateParts[2];
  const month = months[dateParts[1]];
  const day = dateParts[0];
  const newDate = `${year}-${month}-${day}`;

  data.datePublished = newDate;
  data.dateModified = null;
  delete data.date;
}

// Função para processar um arquivo .mdx
function processFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\n');

  // Verifica se o arquivo contém metadados YAML
  if (lines[0].trim() === '---') {
    let yamlData = '';
    let i = 1;

    // Lê as linhas de metadados YAML
    while (lines[i].trim() !== '---') {
      i++;
    }

    // Converte os metadados YAML para um objeto
    const data = yaml.load(lines.slice(1, i).join('\n'));

    // Realiza as alterações nos metadados
    renameAndConvertDate(data);

    // Atualiza o conteúdo do arquivo com os metadados modificados
    lines.splice(0, i, '---', yaml.dump(data), '');

    const updatedFileContents = lines.join('\n');

    // Escreve o arquivo de volta
    fs.writeFileSync(filePath, updatedFileContents);
  }
}

// Função para percorrer todos os arquivos no diretório
function processFilesInDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      processFilesInDirectory(filePath);
    } else if (file.endsWith('.mdx')) {
      processFile(filePath);
      console.log(`Arquivo processado: ${filePath}`);
    }
  });
}

// Inicia o processo de processamento de arquivos
processFilesInDirectory(directory);
