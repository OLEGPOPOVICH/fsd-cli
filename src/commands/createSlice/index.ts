import chalk from 'chalk';

import { hasFolder, createFolder } from '@shared/lib/folder';
import { confirm } from '@shared/utils/confirm';

import { CreateSliceData } from './types';

/**
 * Создает слайс
 * @param {CreateSliceData} data - данные для создания слайса
 * @returns {Promise<void>}
 */
export const createSlice = async ({
  layerName,
  layerPath,
  sliceName,
  slicePath,
}: CreateSliceData): Promise<void> => {
  if (hasFolder(slicePath)) {
    const message = `${layerName} ${chalk.bgRed(
      sliceName,
    )} существует, продолжить?`;

    await confirm(message).then((confirmed) => {
      if (!confirmed) {
        process.exit(1);
      }
    });
  }

  createFolder(layerPath, sliceName);
};
