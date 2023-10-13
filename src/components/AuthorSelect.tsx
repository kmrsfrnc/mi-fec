import { ChangeEvent, useCallback, useEffect } from 'react';

import { ProcessedAuthor } from '../common/interfaces';
import { Select, SelectProps } from './ui/Select';

type AuthorSelectProps = {
  authors: ProcessedAuthor[];
  value?: number;
  setValue: (value: number) => void;
} & Omit<SelectProps, 'value'>;

export const AuthorSelect = ({ authors, value, setValue, ...props }: AuthorSelectProps) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setValue(parseInt(event.target.value, 10));
    },
    [setValue]
  );

  useEffect(() => {
    const [firstAuthor] = authors;

    if (!value && firstAuthor) {
      setValue(firstAuthor.id);
    }
  }, [value, setValue, authors]);

  return (
    <Select value={value} onChange={onChange} {...props}>
      {/* {!value ? <option>- Choose an author -</option> : null} */}
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </Select>
  );
};
