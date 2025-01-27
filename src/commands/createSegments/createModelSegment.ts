import { renderFile, writeFileSync } from '@shared/lib/file';
import { createFolder } from '@shared/lib/folder';

import { CreateModelSegmentData } from './types';

/**
 * Создает сегмент модели
 * @param {CreateModelSegmentData} data - данные для создания модели сегмента
 * @returns {Promise<void>}
 */
export const createModelSegment = async ({
  slicePath,
  modelSegmentPaths,
  modelTemplatePaths,
}: CreateModelSegmentData): Promise<void> => {
  const filePaths = [
    modelSegmentPaths.types,
    modelSegmentPaths.ducks,
    modelSegmentPaths.selectors,
    modelSegmentPaths.sagas,
    modelSegmentPaths.index,
  ];

  createFolder(slicePath, 'model');

  const files = await Promise.all([
    renderFile(modelTemplatePaths.types),
    renderFile(modelTemplatePaths.ducks),
    renderFile(modelTemplatePaths.selectors),
    renderFile(modelTemplatePaths.sagas),
    renderFile(modelTemplatePaths.index),
  ]);

  filePaths.forEach((filePath, index) => {
    writeFileSync(filePath, files[index]);
  });
};
