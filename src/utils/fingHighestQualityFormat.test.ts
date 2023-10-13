import { Video } from '../common/interfaces';
import { fingHighestQualityFormat } from './findHighestQualityFormat';

interface Case {
  formats: Video['formats'];
  formatName: string;
  formatRes: number;
}

describe('fingHighestQualityFormat()', () => {
  const cases: Case[] = [
    {
      formats: {},
      formatName: '',
      formatRes: NaN,
    },
    {
      formats: {
        x: { res: '720p', size: 10 },
        y: { res: '1080p', size: 10 },
      },
      formatName: 'y',
      formatRes: 1080,
    },
    {
      formats: {
        x: { res: '720p', size: 30 },
        y: { res: '1080p', size: 10 },
      },
      formatName: 'x',
      formatRes: 720,
    },
    {
      formats: {
        x: { res: '1080p', size: 10 },
        y: { res: '720p', size: 30 },
        z: { res: '720p', size: 50 },
      },
      formatName: 'z',
      formatRes: 720,
    },
    {
      formats: {
        x: { res: '1080p', size: 10 },
        y: { res: '720p', size: 10 },
      },
      formatName: 'x',
      formatRes: 1080,
    },
  ];

  test.each(cases)('return $formatName, $formatRes', ({ formats, formatName, formatRes }) => {
    expect(fingHighestQualityFormat(formats)).toEqual({
      formatName,
      formatRes,
    });
  });
});
