import { useMemo } from 'react';

import { VideoFormConnected } from '../components/VideoFormConnected';
import { useVideoStore } from '../store/useVideoStore';
import { NotFoundPage } from './NotFoundPage';

interface Props {
  params: {
    id: string;
  };
}

export const EditVideoPage = ({ params }: Props) => {
  const { findVideo } = useVideoStore();

  const video = useMemo(() => {
    return findVideo(parseInt(params.id, 10));
  }, [params.id, findVideo]);

  if (!video) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{`Edit video: ${video.name}`}</h1>
      <VideoFormConnected video={video} key={video.id} />
    </>
  );
};
