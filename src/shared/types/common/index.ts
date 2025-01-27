import { SliceData } from '@shared/types/slice';
import { LayerData } from '@shared/types/layer';

/** Данные для создания файла */
export type RenderFileData = Partial<Pick<SliceData, 'sliceName'>> & {
  /** Название слайса в верблюжем регистре */
  sliceNameInCamelCase?: string;
  /** Название слайса в паскаль кейс регистре */
  sliceNameInPascalCase?: string;
  /** Заголовок слайса в нижнем регистре */
  sliceTitleInLowerCase?: string;
  /** Признак наличия сегмента модели */
  hasModel?: boolean;
  /** Признак наличия сегмента пользовательского интерфейса */
  hasUI?: boolean;
  /** Признак того что слой является страницей */
  isLayerPage?: boolean;
};

/** Данные для генерации файлов */
export type GenerateFilesData = Omit<SliceData, 'slicePath'> &
  Pick<LayerData, 'layerName'> & {
    /** Путь к папке шаблонов */
    templatesPath: string;
  };
