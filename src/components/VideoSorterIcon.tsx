import { ProcessedVideo } from '../common/interfaces';

interface VideoSorterIconProps {
  thisKey: keyof ProcessedVideo;
  sortKey: keyof ProcessedVideo | null;
  sortDescending: boolean;
}

export const VideoSorterIcon = ({ thisKey, sortKey, sortDescending }: VideoSorterIconProps) => {
  if (!sortKey || sortKey !== thisKey) {
    return null;
  }

  if (sortDescending) {
    return <>↑</>;
  }

  return <>↓</>;
};
