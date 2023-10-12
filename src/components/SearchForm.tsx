import { FormEvent, useCallback, useEffect } from 'react';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useInput } from '../utils/useInput';

import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSearch: (keyword: string) => void;
  value: string;
}

export const SearchForm = ({ onSearch, value }: SearchFormProps) => {
  const input = useInput(value);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      onSearch(input.value);
    },
    [input.value, onSearch]
  );

  useEffect(() => {
    if (!input.value) {
      onSearch('');
    }
  }, [input.value, onSearch]);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input type="search" {...input} className={styles.input} />
      <Button color="primary" className={styles.button} type="submit">
        Search
      </Button>
    </form>
  );
};
