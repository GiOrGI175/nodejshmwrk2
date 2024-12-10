const [, , folderName] = process.argv;
const path = require('path');
const fs = require('fs/promises');

async function main() {
  const mainPath = __dirname;
  const dirs = await fs.readdir(mainPath);
  const mainDirFiles = dirs.map((key) => path.join(mainPath, key));

  // console.log(mainDirFiles);

  const folderPath = path.join(mainPath, folderName);
  const folderCheck = mainDirFiles.includes(folderPath);

  if (folderCheck) {
    console.log(`Folder "${folderName}" in main directory.`);
  } else {
    console.log(`Folder "${folderName}" does not in main directory.`);
  }
}
main();
