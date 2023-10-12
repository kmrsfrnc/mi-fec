import type { Author } from '../common/interfaces';

export const getAuthors = async (): Promise<Author[]> => {
  const response = await fetch(`${process.env.REACT_APP_API}/authors`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as unknown as Author[];
};

export const getAuthor = async (id: number): Promise<Author> => {
  const response = await fetch(`${process.env.REACT_APP_API}/authors/${id}`);

  if (!response.ok) throw Error;

  const data: Author = await response.json();

  return data;
};

export const patchAuthor = async (id: number, body: Partial<Author>) => {
  const response = await fetch(`${process.env.REACT_APP_API}/authors/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw Error;
};
