import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'wouter';

import { Button } from '../components/ui/Button';
import { Author, Category, VideoFormModel } from '../common/interfaces';
import { FormField } from './ui/FormField';
import { useInput } from '../utils/useInput';
import { Input } from './ui/Input';
import { validateVideoForm } from '../utils/validateVideoForm';
import { FormActions } from './ui/FormActions';
import { Paths } from '../paths';
import { AuthorSelect } from './AuthorSelect';
import { CategoriesSelect } from './CategoriesSelect';

interface VideoFormProps {
  name: string;
  authorId?: number;
  categoryIds: number[];
  onSubmit: (video: VideoFormModel) => void;
  authors: Author[];
  categories: Category[];
  errorMessage?: string;
}

export function VideoForm({ onSubmit, authors, categories, errorMessage, ...props }: VideoFormProps) {
  const nameInput = useInput(props.name);
  const [authorId, setAuthorId] = useState(props.authorId);
  const [categoryIds, setCategoryIds] = useState(props.categoryIds);

  const handleSubmit = useMemo(() => {
    const body = {
      name: nameInput.value,
      authorId,
      categoryIds,
    };

    if (!validateVideoForm(body)) {
      return;
    }

    return (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit(body);
    };
  }, [nameInput.value, authorId, categoryIds, onSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <h3>{errorMessage}</h3>}
      <FormField label="Video name">
        <Input {...nameInput} />
      </FormField>
      <FormField label="Video author">
        <AuthorSelect authors={authors} value={authorId} setValue={setAuthorId} />
      </FormField>
      <FormField label="Video category">
        <CategoriesSelect categories={categories} value={categoryIds} setValue={setCategoryIds} />
      </FormField>
      <FormActions>
        <Button disabled={!handleSubmit} color="primary" type="submit">
          Submit
        </Button>
        <Link to={Paths.HOME}>
          <Button>Cancel</Button>
        </Link>
      </FormActions>
    </form>
  );
}
