import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'wouter';

import { Button } from '../components/ui/Button';
import { Category, ProcessedAuthor, VideoFormModel } from '../common/interfaces';
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
  isLoading: boolean;
  authorId?: number;
  categoryIds: number[];
  onSubmit: (video: VideoFormModel) => void;
  authors: ProcessedAuthor[];
  categories: Category[];
  errorMessage?: string;
}

export const VideoForm = ({ onSubmit, authors, categories, errorMessage, isLoading, ...props }: VideoFormProps) => {
  const nameInput = useInput(props.name);
  const [authorId, setAuthorId] = useState(props.authorId);
  const [categoryIds, setCategoryIds] = useState(props.categoryIds);

  const handleSubmit = useMemo(() => {
    const body = {
      name: nameInput.value,
      authorId,
      categoryIds,
    };

    if (isLoading || !validateVideoForm(body)) {
      return;
    }

    return (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit(body);
    };
  }, [nameInput.value, authorId, categoryIds, onSubmit, isLoading]);

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <h3>{errorMessage}</h3>}
      <FormField label="Video name" htmlFor="name">
        <Input {...nameInput} id="name" />
      </FormField>
      <FormField label="Video author" htmlFor="authorId">
        <AuthorSelect authors={authors} value={authorId} setValue={setAuthorId} id="authorId" />
      </FormField>
      <FormField label="Video category" htmlFor="categoryIds">
        <CategoriesSelect categories={categories} value={categoryIds} setValue={setCategoryIds} id="categoryIds" />
      </FormField>
      <FormActions>
        <Button disabled={!handleSubmit} color="primary" type="submit">
          {isLoading ? 'Loading' : 'Submit'}
        </Button>
        <Link to={Paths.HOME}>
          <Button>Cancel</Button>
        </Link>
      </FormActions>
    </form>
  );
};
