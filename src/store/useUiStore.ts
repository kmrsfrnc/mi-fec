import { create } from 'zustand';

import { ProcessedVideo } from '../common/interfaces';

export interface UiStore {
  search: string;
  setSearch: (value: string) => void;
  sortKey: keyof ProcessedVideo | null;
  sortDescending: boolean;
  setSort: (sortKey: keyof ProcessedVideo | null, sortDescending: boolean) => void;
}

export const useUiStore = create<UiStore>((set, get) => ({
  search: '',
  setSearch: (search) => {
    set({ search });
  },
  sortDescending: false,
  sortKey: null,
  setSort: (sortKey, sortDescending) => {
    set({ sortKey, sortDescending });
  },
}));
