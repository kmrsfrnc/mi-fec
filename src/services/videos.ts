import { getCategories } from './categories';
import { getAuthor, getAuthors, patchAuthor } from './authors';
import { Author, Category, ProcessedAuthor, ProcessedVideo, VideoFormModel } from '../common/interfaces';
import { processVideos } from '../utils/processVideos';
import { processAuthors } from '../utils/processAuthors';

export const getVideos = async (): Promise<{
  videos: ProcessedVideo[];
  authors: ProcessedAuthor[];
  categories: Category[];
}> => {
  const [authors, categories] = await Promise.all([getAuthors(), getCategories()]);

  return {
    videos: processVideos(authors, categories),
    authors: processAuthors(authors),
    categories,
  };
};

export const deleteVideo = async (authorId: number, videoId: number) => {
  const data = await getAuthor(authorId);
  const videos = data.videos.filter(({ id }) => id !== videoId);

  await patchAuthor(authorId, { videos });
};

export const updateVideo = async (id: number, body: VideoFormModel) => {
  const data = await getAuthor(body.authorId);
  const videoIndex = data.videos.findIndex((item) => item.id === id);

  if (videoIndex < 0) {
    const allAuthors = await getAuthors();
    const oldAuthor = allAuthors.find((author) => {
      return author.videos.find((item) => item.id === id);
    });

    if (!oldAuthor) throw Error;

    const oldVideo = oldAuthor.videos.find((item) => item.id === id);

    if (!oldVideo) throw Error;

    await deleteVideo(oldAuthor.id, oldVideo.id);

    const videos = [
      ...data.videos,
      {
        ...oldVideo,
        name: body.name,
        catIds: body.categoryIds,
      },
    ];

    return await patchAuthor(data.id, { videos });
  }

  const videos = data.videos.map((video) => {
    if (id === video.id) {
      return {
        ...video,
        name: body.name,
        catIds: body.categoryIds,
      };
    }

    return video;
  });

  return await patchAuthor(body.authorId, { videos });
};

export const createVideo = async (body: VideoFormModel) => {
  const response = await fetch(`${process.env.REACT_APP_API}/authors/${body.authorId}`);

  if (!response.ok) throw Error(await response.text());

  const data: Author = await response.json();
  const videos = [
    ...data.videos,
    {
      id: Math.round(Math.random() * 100000),
      name: body.name,
      catIds: body.categoryIds,
      formats: {
        one: { res: '1080p', size: 1000 },
      },
      releaseDate: '2023-10-12',
    },
  ];

  return await patchAuthor(body.authorId, { videos });
};
