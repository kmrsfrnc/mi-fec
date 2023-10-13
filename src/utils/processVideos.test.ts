import { Author, Category } from '../common/interfaces';
import { processVideos } from './processVideos';

import { authors, categories } from '../mocks';
import { formatDate } from './formatDate';

describe('processVideos()', () => {
  const videos = processVideos(authors, categories);

  it('returns the list of all videos', () => {
    expect(videos).toHaveLength(6);
  });

  test.each([
    {
      at: 0,
      check: {
        authorId: 1,
        author: 'David Munch',
      },
    },
    {
      at: 1,
      check: {
        categoryIds: [2, 4],
        categories: ['Crime', 'Horror'],
      },
    },
    {
      at: 2,
      check: {
        formatName: 'two',
        formatRes: 720,
      },
    },
    {
      at: 3,
      check: {
        releaseDate: '2018-08-10',
        releaseDateFormatted: formatDate('2018-08-10'),
      },
    },
    {
      at: 4,
      check: {
        id: 5,
        name: 'Go and get it',
      },
    },
  ])('sets the correct fields $at', ({ at, check }) => {
    expect(videos[at]).toEqual(expect.objectContaining(check));
  });

  it('skips the category names if missing', () => {
    const items = processVideos([authors[0]], [categories[1], categories[2], categories[3]]);

    expect(items[0]).toHaveProperty('categoryIds', [1, 2]);
    expect(items[0]).toHaveProperty('categories', ['Crime']);
    expect(items[1]).toHaveProperty('categoryIds', [2, 4]);
    expect(items[1]).toHaveProperty('categories', ['Crime', 'Horror']);
  });
});
