import { validateVideoForm } from './validateVideoForm';

describe('validateVideoForm()', () => {
  test.each([
    {
      videoForm: {
        name: 'first',
        authorId: 1,
        categoryIds: [2, 3],
      },
      expected: true,
    },
    {
      videoForm: {
        name: '',
        authorId: 1,
        categoryIds: [2, 3],
      },
      expected: false,
    },
    {
      videoForm: {
        name: 'third',
        categoryIds: [2, 3],
      },
      expected: false,
    },
    {
      videoForm: {
        name: 'fourth',
        authorId: 1,
        categoryIds: [],
      },
      expected: false,
    },
    {
      videoForm: {
        name: 'fifth',
        authorId: 1,
      },
      expected: false,
    },
    {
      videoForm: {
        authorId: 1,
        categoryIds: [2, 3],
      },
      expected: false,
    },
  ])('return $expected for $videoForm.name', ({ videoForm, expected }) => {
    expect(validateVideoForm(videoForm)).toEqual(expected);
  });
});
