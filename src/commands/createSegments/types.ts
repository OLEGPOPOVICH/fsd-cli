import { LayerData } from '@shared/types/layer';
import { SliceData } from '@shared/types/slice';
import {
  ModelSegmentPaths,
  SegmentPaths,
  UISegmentPaths,
} from '@shared/types/segments';

/** Данные для создания сегментов */
export type CreateSegmentsData = Omit<LayerData, 'layerPath'> &
  SliceData & {
    /** Пути к сегментам */
    segmentPaths: SegmentPaths;
    /** Пути к шаблонам сегментам */
    templatePaths: SegmentPaths;
  };

/** Данные для создания UI сегмента */
export type CreateUISegmentData = Pick<SliceData, 'slicePath'> & {
  /** Признак того что слой является страницей */
  isLayerPage: boolean;
  /** Название слайса в паскаль кейс регистре */
  sliceNameInPascalCase: string;
  /** Заголовок слайса в нижнем регистре */
  sliceTitleInLowerCase: string;
  /** Пути к файлам сегмента пользовательского интерфейса */
  uiSegmentPaths: UISegmentPaths;
  /** Пути к файлам шаблонов пользовательского интерфейса */
  uiTemplatePaths: UISegmentPaths;
};

/** Данные для создания модели сегмента */
export type CreateModelSegmentData = Pick<SliceData, 'slicePath'> & {
  /** Пути к файлам сегмента модели */
  modelSegmentPaths: ModelSegmentPaths;
  /** Пути к файлам шаблонов модели */
  modelTemplatePaths: ModelSegmentPaths;
};
