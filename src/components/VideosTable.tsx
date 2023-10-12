import { useMemo } from 'react';
import { ProcessedVideo } from '../common/interfaces';
import { searchObjects } from '../utils/searchObjects';
import { sortObjects } from '../utils/sortObjects';
import { Table } from './ui/Table';
import { VideoSorter } from './VideoSorter';
import { VideosTableRow } from './VideosTableRow';
import { NoResults } from './NoResults';

interface VideosTableProps {
  videos: ProcessedVideo[];
  sort?: {
    key: keyof ProcessedVideo;
    direction: 'ASC' | 'DESC';
  };
  search: string;
  onDelete: (authorId: number, videoId: number) => void;
}

export const VideosTable = ({ videos, onDelete, search, sort }: VideosTableProps) => {
  const itemsWithSearch = useMemo(() => {
    return searchObjects(videos, search);
  }, [videos, search]);

  const itemsWIthSearchAndSort = useMemo(() => {
    return sortObjects(itemsWithSearch, sort?.key, sort?.direction);
  }, [itemsWithSearch, sort?.key, sort?.direction]);

  if (!itemsWIthSearchAndSort.length && search.length) {
    return <NoResults search={search} />;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <VideoSorter sortKey="name" label="Video name" />
          </th>
          <th>
            <VideoSorter sortKey="author" label="Author" />
          </th>
          <th>Categories</th>
          <th>
            <VideoSorter sortKey="formatRes" label="Highest quality format" />
          </th>
          <th>
            <VideoSorter sortKey="releaseDate" label="Release date" />
          </th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {itemsWIthSearchAndSort.map((item) => {
          return <VideosTableRow key={item.id} item={item} onDelete={onDelete} />;
        })}
      </tbody>
    </Table>
  );
};
