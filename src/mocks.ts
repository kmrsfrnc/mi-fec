import { Author, Category } from './common/interfaces';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Thriller',
  },
  {
    id: 2,
    name: 'Crime',
  },
  {
    id: 3,
    name: 'Comedy',
  },
  {
    id: 4,
    name: 'Horror',
  },
];

export const authors: Author[] = [
  {
    id: 1,
    name: 'David Munch',
    videos: [
      {
        id: 1,
        catIds: [1, 2],
        name: 'Set the Moon',
        formats: {
          one: { res: '1080p', size: 1000 },
          two: { res: '720p', size: 2000 },
          three: { res: '720p', size: 900 },
        },
        releaseDate: '2018-08-09',
      },
      {
        id: 2,
        catIds: [2, 4],
        name: 'Lights',
        formats: {
          one: { res: '720p', size: 700 },
          two: { res: '1080p', size: 1500 },
          three: { res: '720p', size: 800 },
        },
        releaseDate: '2018-08-10',
      },
    ],
  },
  {
    id: 2,
    name: 'Li Sun Chi',
    videos: [
      {
        id: 3,
        catIds: [4],
        name: 'Fun',
        formats: {
          one: { res: '720p', size: 730 },
          two: { res: '720p', size: 4500 },
          three: { res: '720p', size: 2005 },
        },
        releaseDate: '2018-08-10',
      },
      {
        id: 4,
        catIds: [1, 2, 4],
        name: 'It',
        formats: {
          one: { res: '1080p', size: 1123 },
        },
        releaseDate: '2018-08-10',
      },
      {
        id: 5,
        catIds: [2],
        name: 'Go and get it',
        formats: {
          one: { res: '720p', size: 4500 },
          two: { res: '1080p', size: 1123 },
        },
        releaseDate: '2018-08-10',
      },
    ],
  },
  {
    id: 3,
    name: 'Steven Scorsese',
    videos: [
      {
        id: 6,
        catIds: [2, 4],
        name: 'Torrance',
        formats: {
          one: { res: '720p', size: 4500 },
        },
        releaseDate: '2018-08-10',
      },
    ],
  },
];
