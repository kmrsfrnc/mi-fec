import { create } from 'zustand';

import { Category, ProcessedAuthor, ProcessedVideo, VideoFormModel } from '../common/interfaces';
import { createVideo, deleteVideo, getVideos, updateVideo } from '../services/videos';

export interface VideosStore {
  videos: ProcessedVideo[];
  categories: Category[];
  authors: ProcessedAuthor[];
  fetch: () => void;
  fetchStatus: 'initial' | 'loading' | 'success' | 'error';
  findVideo: (id: number) => ProcessedVideo | undefined;
  createVideo: (body: VideoFormModel) => void;
  updateVideo: (id: number, body: VideoFormModel) => void;
  deleteVideo: (authorId: number, videoId: number) => void;
}

export const useVideoStore = create<VideosStore>((set, get) => ({
  videos: [],
  authors: [],
  categories: [],
  fetch: async () => {
    set({ fetchStatus: 'loading' });

    try {
      const { videos, authors, categories } = await getVideos();

      set({ videos, authors, categories, fetchStatus: 'success' });
    } catch (err) {
      set({ fetchStatus: 'error' });
    }
  },
  fetchStatus: 'initial',
  findVideo: (id: number) => {
    return get().videos.find((item) => item.id === id);
  },
  createStatus: 'initial',
  createVideo: async (body: VideoFormModel) => {
    await createVideo(body);

    get().fetch();
  },
  updateVideo: async (id: number, body: VideoFormModel) => {
    await updateVideo(id, body);

    get().fetch();
  },
  deleteVideo: async (authorId: number, videoId: number) => {
    await deleteVideo(authorId, videoId);

    get().fetch();
  },
}));
