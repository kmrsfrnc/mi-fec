import { useCallback } from 'react';
import { Link } from 'wouter';

import { Button } from './ui/Button';
import { ProcessedVideo } from '../common/interfaces';
import { generateUpdateVideoPath } from '../paths';

import style from './VideosTableRow.module.css';

interface VideosTableRowProps {
  item: ProcessedVideo;
  onDelete: (authorId: number, videoId: number) => void;
}

export const VideosTableRow = ({ item, onDelete }: VideosTableRowProps) => {
  const handleDelete = useCallback(() => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      onDelete(item.authorId, item.id);
    }
  }, [item, onDelete]);

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
          <Button onClick={handleDelete} color="danger">
            Delete
          </Button>
        </div>
      </th>
    </tr>
  );
};
