import { LayerData } from '@shared/types/layer';
import { SliceData } from '@shared/types/slice';

/** Данные для создания слайса */
export type CreateSliceData = LayerData & Omit<SliceData, 'sliceTitle'>;
