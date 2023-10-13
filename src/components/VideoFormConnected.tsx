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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (body: VideoFormModel) => {
      setIsLoading(true);

      try {
        if (video?.id) {
          await updateVideo(video.id, body);
        } else {
          await createVideo(body);
        }

        setIsLoading(false);
        setLocation(Paths.HOME);
      } catch (error) {
        setErrorMessage(`There was an error. Please try again.`);
        setIsLoading(false);
      }
    },
    [updateVideo, createVideo, video?.id, setLocation, setIsLoading]
  );

  return (
    <VideoForm
      errorMessage={errorMessage}
      isLoading={isLoading}
      authors={authors}
      categories={categories}
      onSubmit={onSubmit}
      name={video?.name || ''}
      authorId={video?.authorId}
      categoryIds={video?.categoryIds || []}
    />
  );
});
