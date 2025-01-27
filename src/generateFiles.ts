import { createSegmentPaths, createTemplatePaths } from '@shared/utils/paths';
import { GenerateFilesData } from '@shared/types/common';

import { createSlice } from '@commands/createSlice';
import { createSegments } from '@commands/createSegments';

/**
 * Генерирует файлы
 * @param {GenerateFilesData} data - данные для генерации файлов
 * @returns {Promise<void>}
 */
export const generateFiles = async ({
  layerName,
  sliceName,
  sliceTitle,
  templatesPath,
}: GenerateFilesData): Promise<void> => {
  const layerPath = `src/${layerName}`;
  const slicePath = `${layerPath}/${sliceName}`;
  const segmentPaths = createSegmentPaths(slicePath, sliceName);
  const templatePaths = createTemplatePaths(templatesPath).segments;

  /** Создание слайса */
  await createSlice({
    layerName,
    layerPath,
    sliceName,
    slicePath,
  });

  /** Создание сегментов */
  await createSegments({
    layerName,
    sliceName,
    sliceTitle,
    slicePath,
    segmentPaths,
    templatePaths,
  });
};
