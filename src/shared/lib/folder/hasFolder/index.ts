import fs from 'fs';

/**
 * Проверяет наличия папки
 * @param {string} dirPath - путь к папке
 * @returns {boolean} - признак наличия папки
 */
export const hasFolder = (dirPath: string): boolean => {
  return fs.existsSync(dirPath);
};
