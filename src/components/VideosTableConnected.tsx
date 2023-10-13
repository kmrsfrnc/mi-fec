import { useCallback } from 'react';

import { useUiStore } from '../store/useUiStore';
import { useVideoStore } from '../store/useVideoStore';
import { VideosTable } from './VideosTable';

export const VideosTableConnected = () => {
  const { videos, deleteVideo } = useVideoStore();
  const { sortKey, sortDescending, search } = useUiStore();

  const onDelete = useCallback(
    async (authorId: number, videoId: number) => {
      try {
        await deleteVideo(authorId, videoId);
      } catch (err) {
        window.alert('Something went wrong. Please try again');
      }
    },
    [deleteVideo]
  );

  return (
    <VideosTable
      videos={videos}
      sortKey={sortKey}
      sortDescending={sortDescending}
      search={search}
      onDelete={onDelete}
    />
  );
};
