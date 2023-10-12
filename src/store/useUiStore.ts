import { create } from 'zustand';

import { ProcessedVideo } from '../common/interfaces';

interface Sort {
  direction: 'ASC' | 'DESC';
  key: keyof ProcessedVideo;
}

export interface UiStore {
  search: string;
  setSearch: (value: string) => void;
  sort?: Sort;
  setSort: (sort?: Sort) => void;
}

export const useUiStore = create<UiStore>((set, get) => ({
  search: '',
  setSearch: (search) => {
    set({ search });
  },
  sortDirection: 'ASC',
  setSort: (sort) => {
    set({ sort });
  },
}));
