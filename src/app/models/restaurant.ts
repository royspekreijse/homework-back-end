import { SortingValues } from './sorting-values';

export interface Restaurant {
    name: string;
    status: string;
    sortingValues: SortingValues;
    isFavorite?: boolean;
}


