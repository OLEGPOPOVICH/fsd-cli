import { SegmentPaths } from '@shared/types/segments';
import { toPascalCase } from '@shared/lib/string';

/**
 * Создает пути к сегментам
 * @param {string} slicePath - путь к слайсу
 * @param {string} sliceName - имя слайся
 * @returns {SegmentPaths} - пути к сегментам
 */
export const createSegmentPaths = (
  slicePath: string,
  sliceName: string,
): SegmentPaths => {
  return {
    config: `${slicePath}/config.ts`,
    ui: {
      folderPath: `${slicePath}/ui`,
      component: `${slicePath}/ui/${toPascalCase(sliceName)}.tsx`,
      index: `${slicePath}/ui/index.ts`,
    },
    model: {
      folderPath: `${slicePath}/model`,
      types: `${slicePath}/model/types.ts`,
      ducks: `${slicePath}/model/ducks.ts`,
      selectors: `${slicePath}/model/selectors.ts`,
      sagas: `${slicePath}/model/sagas.ts`,
      index: `${slicePath}/model/index.ts`,
    },
    lib: `${slicePath}/lib.ts`,
    index: `${slicePath}/index.ts`,
  };
};
