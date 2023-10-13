import { useCallback, useMemo } from 'react';
import { ProcessedVideo } from '../common/interfaces';
import { useUiStore } from '../store/useUiStore';

import styles from './VideoSorter.module.css';
import { VideoSorterIcon } from './VideoSorterIcon';

interface VideoSorterProps {
  label: string;
  thisKey: keyof ProcessedVideo;
}

export const VideoSorter = ({ label, thisKey }: VideoSorterProps) => {
  const { sortKey, sortDescending, setSort } = useUiStore();

  const nextSort = useMemo<[keyof ProcessedVideo | null, boolean]>(() => {
    if (!sortKey || sortKey !== thisKey) {
      return [thisKey, false];
    }

    if (sortDescending) {
      return [null, false];
    }

    return [sortKey, !sortDescending];
  }, [sortKey, thisKey, sortDescending]);

  const handleClick = useCallback(() => {
    setSort(...nextSort);
  }, [nextSort, setSort]);

  return (
    <button className={styles.button} onClick={handleClick}>
      <span>{label}</span>
      {` `}
      <VideoSorterIcon thisKey={thisKey} sortKey={sortKey} sortDescending={sortDescending} />
    </button>
  );
};
