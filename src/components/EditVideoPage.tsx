import { useMemo } from 'react';
import { Link } from 'wouter';

import { VideoFormConnected } from '../components/VideoFormConnected';
import { useVideoStore } from '../store/useVideoStore';
import { ErrorPage } from './ErrorPage';
import { Paths } from '../paths';
import { Button } from './ui/Button';

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
    return (
      <ErrorPage message="Video not found">
        <Link to={Paths.HOME}>
          <Button color="info">Go to home</Button>
        </Link>
      </ErrorPage>
    );
  }

  return (
    <>
      <h1>{`Edit video: ${video.name}`}</h1>
      <VideoFormConnected video={video} />
    </>
  );
};
