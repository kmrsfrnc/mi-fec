import { useCallback, useState } from 'react';
import { Link } from 'wouter';

import { Button } from './ui/Button';
import { ProcessedVideo } from '../common/interfaces';
import { generateUpdateVideoPath } from '../paths';

import style from './VideosTableRow.module.css';

interface VideosTableRowProps {
  item: ProcessedVideo;
  onDelete: (authorId: number, videoId: number) => Promise<void>;
}

export const VideosTableRow = ({ item, onDelete }: VideosTableRowProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      setIsLoading(true);

      await onDelete(item.authorId, item.id);

      setIsLoading(false);
    }
  }, [item, onDelete, setIsLoading]);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.author}</td>
      <td>{item.categories.join(', ')}</td>
      <td>{`${item.formatName} ${item.formatRes}p`}</td>
      <td>{item.releaseDateFormatted}</td>
      <th>
        <div className={style.options}>
          <Link to={generateUpdateVideoPath(item.id)}>
            <Button color="info">Edit</Button>
          </Link>
          <Button onClick={handleDelete} color="danger" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Delete'}
          </Button>
        </div>
      </th>
    </tr>
  );
};
