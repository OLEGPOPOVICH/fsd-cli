/** Пути к файлам сегмента пользовательского интерфейса */
export type UISegmentPaths = {
  /** Путь к папке сегмента */
  folderPath: string;
  /** Путь к файлу компонента */
  component: string;
  /** Путь к файлу экспорта компонента */
  index: string;
};

/** Пути к файлам сегмента модели */
export type ModelSegmentPaths = {
  /** Путь к папке сегмента */
  folderPath: string;
  /** Путь к файлу типов */
  types: string;
  /** Путь к файлу дакс */
  ducks: string;
  /** Путь к файлу селекторов */
  selectors: string;
  /** Путь к файлу саг */
  sagas: string;
  /** Путь к файлу экспорта модели */
  index: string;
};

/** Пути к сегментам */
export type SegmentPaths = {
  /** Путь к конфигурации сегмента */
  config: string;
  /** Пути к файлам сегмента пользовательского интерфейса */
  ui: UISegmentPaths;
  /** Пути к файлам сегмента модели */
  model: ModelSegmentPaths;
  /** Путь к файлу библиотечного кода */
  lib: string;
  /** Путь к файлу экспорта сегментов */
  index: string;
};
