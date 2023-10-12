import { useCallback, useMemo } from 'react';
import { ProcessedVideo } from '../common/interfaces';
import { useUiStore } from '../store/useUiStore';

import styles from './VideoSorter.module.css';

interface VideoSorterProps {
  label: string;
  sortKey: keyof ProcessedVideo;
}

export const VideoSorter = ({ label, sortKey }: VideoSorterProps) => {
  const { sort, setSort } = useUiStore();

  const nextSort = useMemo(() => {
    if (!sort) {
      return {
        key: sortKey,
        direction: 'ASC' as const,
      };
    }

    if (sort.key !== sortKey) {
      return {
        key: sortKey,
        direction: 'ASC' as const,
      };
    }

    if (sort.direction === 'ASC') {
      return {
        key: sort.key,
        direction: 'DESC' as const,
      };
    }

    return;
  }, [sort, sortKey]);

  // TODO: Move to different folder
  const icon = useMemo(() => {
    if (!sort?.key || sort.key !== sortKey) {
      return '';
    }

    if (sort.direction === 'ASC') {
      return ' ↓';
    }

    return ' ↑';
  }, [sort, sortKey]);

  const handleClick = useCallback(() => {
    setSort(nextSort);
  }, [nextSort, setSort]);

  return (
    <button className={styles.button} onClick={handleClick}>
      <span>{label}</span>
      {icon}
    </button>
  );
};
