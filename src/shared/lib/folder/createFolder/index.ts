import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

/**
 * Создает папку
 * @param {string} dirPath - путь к папке
 * @param {string} folderName - название папки
 * @returns {void}
 */
export const createFolder = (dirPath: string, folderName: string): void => {
  const folderPath = path.join(dirPath, folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`${chalk.blue('Создана папка:')} ${chalk.yellow(folderPath)}`);
  }
};
