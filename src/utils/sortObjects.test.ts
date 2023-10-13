import { categories } from '../mocks';
import { sortObjects } from './sortObjects';

const sortedById = categories;
const sortedByName = [categories[2], categories[1], categories[3], categories[0]];

describe('sortObjects()', () => {
  it('returns the original when no key is passed', () => {
    expect(sortObjects(sortedByName, null)).toEqual(sortedByName);
    expect(sortObjects(sortedByName, null, true)).toEqual(sortedByName);
  });

  it('sorts by string property', () => {
    expect(sortObjects(sortedById, 'name')).toEqual(sortedByName);
  });

  it('sorts by string property descending', () => {
    expect(sortObjects(categories, 'name', true)).toEqual([...sortedByName].reverse());
  });

  it('works with equal values', () => {
    expect(sortObjects([...sortedByName, categories[0]], 'id')).toEqual([categories[0], ...categories]);
  });

  it('sorts by number property', () => {
    expect(sortObjects(sortedByName, 'id')).toEqual(sortedById);
  });

  it('sorts by number property descending', () => {
    expect(sortObjects(sortedByName, 'id', true)).toEqual([...categories].reverse());
  });
});
