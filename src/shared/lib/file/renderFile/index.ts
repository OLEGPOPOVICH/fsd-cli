import chalk from 'chalk';
import ejs from 'ejs';
import { RenderFileData } from '@shared/types/common';

/**
 * Создает файл
 * @param {string} path - путь к файлу
 * @param {RenderFileData} data - данные для создания файла
 * @returns {Promise<string>}
 */
export const renderFile = async (
  path: string,
  data?: RenderFileData,
): Promise<string> => {
  try {
    return await ejs.renderFile(path, data || {});
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error?.message : 'Неизвестная ошибка';

    console.error(
      `${chalk.red('Ошибка создания файла шаблона:')} ${errorMessage}`,
    );
    process.exit(1);
  }
};
