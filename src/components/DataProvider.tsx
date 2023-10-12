import { PropsWithChildren, useEffect } from 'react';

import { useVideoStore } from '../store/useVideoStore';
import { ErrorPage } from './ErrorPage';
import { Button } from './ui/Button';

export const DataProvider = (props: PropsWithChildren) => {
  const { fetch, fetchStatus } = useVideoStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (fetchStatus === 'error') {
    return (
      <ErrorPage message="There was an error fetching the videos">
        <Button color="info" onClick={fetch}>
          Try again
        </Button>
      </ErrorPage>
    );
  }

  if (fetchStatus !== 'success') {
    return <>Loading</>;
  }

  return <>{props.children}</>;
};
