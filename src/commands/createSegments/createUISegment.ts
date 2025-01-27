import { createFolder } from '@shared/lib/folder';
import { renderFile, writeFileSync } from '@shared/lib/file';

import { CreateUISegmentData } from './types';

/**
 * Создает сегмент пользовательского интерфейса
 * @param {CreateUISegmentData} data - данные для создания UI сегмента
 * @returns {Promise<void>}
 */
export const createUISegment = async ({
  isLayerPage,
  sliceNameInPascalCase,
  sliceTitleInLowerCase,
  slicePath,
  uiSegmentPaths,
  uiTemplatePaths,
}: CreateUISegmentData): Promise<void> => {
  createFolder(slicePath, 'ui');

  const componentFile = await renderFile(uiTemplatePaths.component, {
    sliceTitleInLowerCase,
    sliceNameInPascalCase,
  });
  writeFileSync(uiSegmentPaths.component, componentFile);

  if (!isLayerPage) {
    const indexFile = await renderFile(uiTemplatePaths.index, {
      sliceNameInPascalCase,
    });
    writeFileSync(uiSegmentPaths.index, indexFile);
  }
};
