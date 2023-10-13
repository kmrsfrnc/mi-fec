import { Author, Category, ProcessedVideo } from '../common/interfaces';
import { fingHighestQualityFormat } from '../utils/findHighestQualityFormat';
import { formatDate } from './formatDate';

export const mapCategoryIds = (map: Map<number, string>, ids: number[]): string[] => {
  return ids.reduce<string[]>((categories, id) => {
    const categoryName = map.get(id);

    if (categoryName) {
      return [...categories, categoryName];
    }

    return categories;
  }, []);
};

export const processVideos = (authors: Author[], categories: Category[]): ProcessedVideo[] => {
  const categoriesMap = new Map(categories.map(({ id, name }) => [id, name]));
  const videos: ProcessedVideo[][] = authors.map((author) => {
    return author.videos.map((video) => {
      return {
        id: video.id,
        name: video.name,
        author: author.name,
        authorId: author.id,
        categories: mapCategoryIds(categoriesMap, video.catIds),
        categoryIds: video.catIds,
        releaseDateFormatted: formatDate(video.releaseDate),
        releaseDate: video.releaseDate,
        ...fingHighestQualityFormat(video.formats),
      };
    });
  });

  return videos.flat();
};
