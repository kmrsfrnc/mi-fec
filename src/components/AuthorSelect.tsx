import { ChangeEvent, useCallback } from 'react';

import { Author } from '../common/interfaces';
import { Select } from './ui/Select';

interface AuthorSelectProps {
  authors: Author[];
  value?: number;
  setValue: (value: number) => void;
}

export const AuthorSelect = ({ authors, value, setValue }: AuthorSelectProps) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setValue(parseInt(event.target.value, 10));
    },
    [setValue]
  );

  return (
    <Select value={value} onChange={onChange}>
      {!value ? <option>- Choose an author -</option> : null}
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </Select>
  );
};
