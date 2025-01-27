import chalk from 'chalk';

import { hasFolder } from '@shared/lib/folder';
import { renderFile, writeFileSync } from '@shared/lib/file';
import { toCamelCase, toPascalCase } from '@shared/lib/string';
import { confirm } from '@shared/utils/confirm';
import { LAYER_NAMES } from '@shared/constants/layers';

import { CreateSegmentsData } from './types';
import { createModelSegment } from './createModelSegment';
import { createUISegment } from './createUISegment';

/**
 * Создает сегменты
 * @param {CreateSegmentsData} data - данные для создания сегментов
 * @returns {Promise<void>}
 */
export const createSegments = async ({
  layerName,
  sliceTitle,
  sliceName,
  slicePath,
  segmentPaths,
  templatePaths,
}: CreateSegmentsData): Promise<void> => {
  const isLayerPage = layerName === LAYER_NAMES.PAGES;
  const state = {
    isLayerPage,
    hasModel: hasFolder(segmentPaths.model.folderPath),
    hasUI: hasFolder(segmentPaths.ui.folderPath),
  };
  const sliceNameInPascalCase = toPascalCase(sliceName);
  const sliceNameInCamelCase = toCamelCase(sliceName);
  const sliceTitleInLowerCase = sliceTitle.toLowerCase();

  await confirm('Создать UI?').then(async (confirmed) => {
    if (confirmed) {
      state.hasUI = true;

      await createUISegment({
        isLayerPage,
        sliceNameInPascalCase,
        sliceTitleInLowerCase,
        slicePath,
        uiSegmentPaths: segmentPaths.ui,
        uiTemplatePaths: templatePaths.ui,
      });
    }
  });

  if (!isLayerPage) {
    await confirm('Создать model?').then(async (confirmed) => {
      if (confirmed) {
        state.hasModel = true;

        await createModelSegment({
          slicePath,
          modelSegmentPaths: segmentPaths.model,
          modelTemplatePaths: templatePaths.model,
        });
      }

      console.warn(
        `${chalk.yellow('WARNING:')} Подключите reducer к rootReducer`,
      );
      console.warn(`${chalk.yellow('WARNING:')} Подключите watcher к rootSaga`);
    });

    const filePaths = [segmentPaths.config, segmentPaths.lib];

    const files = await Promise.all([
      renderFile(templatePaths.config, { sliceName }),
      renderFile(templatePaths.lib),
    ]);

    filePaths.forEach((filePath, index) => {
      writeFileSync(filePath, files[index]);
    });
  }

  const indexFile = await renderFile(templatePaths.index, {
    sliceTitleInLowerCase,
    sliceNameInCamelCase,
    sliceNameInPascalCase,
    ...state,
  });
  writeFileSync(segmentPaths.index, indexFile);
};
