import chalk from 'chalk';
import fs from 'fs';

/**
 * Записывает файл
 * @param {string} filePath - путь к файлу
 * @param {string} file - файл для записи
 * @returns {void}
 */
export const writeFileSync = (filePath: string, file: string): void => {
  try {
    fs.writeFileSync(filePath, file);
    console.log(`${chalk.blue('Файл записан:')} ${chalk.yellow(filePath)}`);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error?.message : 'Неизвестная ошибка';

    console.error(`${chalk.red('Ошибка записи файла:')} ${errorMessage}`);
    process.exit(1);
  }
};
