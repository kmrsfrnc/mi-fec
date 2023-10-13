import { categories } from '../mocks';
import { searchObjects } from './searchObjects';

describe('searchObjects()', () => {
  it('return all without a keyword', () => {
    expect(searchObjects(categories, '')).toEqual(categories);
  });

  it('returns case insensitive results', () => {
    expect(searchObjects(categories, 'c')).toEqual([categories[1], categories[2]]);
    expect(searchObjects(categories, 'O')).toEqual([categories[2], categories[3]]);
  });

  it('returns number results', () => {
    expect(searchObjects(categories, '2')).toEqual([categories[1]]);
  });

  it('returns no results', () => {
    expect(searchObjects(categories, 'X')).toEqual([]);
  });
});
