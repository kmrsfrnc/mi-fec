import { Author, ProcessedAuthor } from '../common/interfaces';

export const processAuthors = (authors: Author[]): ProcessedAuthor[] => {
  return authors.map(({ videos, ...author }) => author);
};
