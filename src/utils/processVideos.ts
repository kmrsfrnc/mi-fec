import { Author, Category, ProcessedVideo } from '../common/interfaces';
import { fingHighestQualityFormat } from '../utils/findHighestQualityFormat';

export const mapCategoryIds = (map: Map<number, string>, ids: number[]): string[] => {
  return ids.reduce<string[]>((categories, id) => {
    const categoryName = map.get(id);

    if (categoryName) {
      return [...categories, categoryName];
    }

    return categories;
  }, []);
};

export function processVideos(authors: Author[], categories: Category[]): ProcessedVideo[] {
  const categoriesMap = new Map(categories.map(({ id, name }) => [id, name]));
  const videos: ProcessedVideo[] = [];

  for (const author of authors) {
    videos.push(
      ...author.videos.map((video) => {
        const format = fingHighestQualityFormat(video.formats);

        return {
          id: video.id,
          name: video.name,
          author: author.name,
          authorId: author.id,
          categories: mapCategoryIds(categoriesMap, video.catIds),
          categoryIds: video.catIds,
          formatName: format?.name || '',
          formatRes: format?.res || 0,
          releaseDateFormatted: new Date(video.releaseDate).toLocaleDateString(),
          releaseDate: video.releaseDate,
        };
      })
    );
  }

  return videos;
}
