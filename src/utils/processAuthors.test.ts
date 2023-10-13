import { authors } from '../mocks';
import { processAuthors } from './processAuthors';

describe('processAuthors()', () => {
  it('removes the videos', () => {
    expect(processAuthors(authors)).toEqual([
      { id: 1, name: 'David Munch' },
      { id: 2, name: 'Li Sun Chi' },
      { id: 3, name: 'Steven Scorsese' },
    ]);
  });
});
