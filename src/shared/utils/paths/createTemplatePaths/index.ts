import { TemplatePaths } from '@shared/types/templates';

/**
 * Создает пути к шаблонам сегментов
 * @param {string} templatesPath - путь к папке шаблонов
 * @returns {TemplatePaths} - пути к шаблонам сегментов
 */
export const createTemplatePaths = (templatesPath: string): TemplatePaths => {
  return {
    segments: {
      config: `${templatesPath}/segments/config.ejs`,
      ui: {
        folderPath: `${templatesPath}/segments/ui`,
        component: `${templatesPath}/segments/ui/Component.ejs`,
        index: `${templatesPath}/segments/ui/index.ejs`,
      },
      model: {
        folderPath: `${templatesPath}/segments/model`,
        types: `${templatesPath}/segments/model/types.ejs`,
        ducks: `${templatesPath}/segments/model/ducks.ejs`,
        selectors: `${templatesPath}/segments/model/selectors.ejs`,
        sagas: `${templatesPath}/segments/model/sagas.ejs`,
        index: `${templatesPath}/segments/model/index.ejs`,
      },
      lib: `${templatesPath}/segments/lib.ejs`,
      index: `${templatesPath}/segments/index.ejs`,
    },
  };
};
