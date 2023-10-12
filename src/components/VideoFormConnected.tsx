import React, { useCallback, useState } from 'react';

import { ProcessedVideo, VideoFormModel } from '../common/interfaces';
import { VideoForm } from './VideoForm';
import { useLocation } from 'wouter';
import { useVideoStore } from '../store/useVideoStore';
import { Paths } from '../paths';

interface VideoFormConnectedProps {
  video?: ProcessedVideo;
}

export const VideoFormConnected = React.memo(({ video }: VideoFormConnectedProps) => {
  const [, setLocation] = useLocation();
  const { updateVideo, createVideo, categories, authors } = useVideoStore();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = useCallback(
    async (body: VideoFormModel) => {
      try {
        if (video?.id) {
          await updateVideo(video.id, body);
        } else {
          await createVideo(body);
        }

        setLocation(Paths.HOME);
      } catch (error) {
        setErrorMessage(`There was an error. Please try again.`);
      }
    },
    [updateVideo, createVideo, video?.id, setLocation]
  );

  return (
    <VideoForm
      errorMessage={errorMessage}
      authors={authors}
      categories={categories}
      onSubmit={onSubmit}
      name={video?.name || ''}
      authorId={video?.authorId}
      categoryIds={video?.categoryIds || []}
    />
  );
});
