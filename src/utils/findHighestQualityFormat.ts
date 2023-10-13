import { Video } from '../common/interfaces';

const compareFormats = (formats: Video['formats'], a: string, b: string): string => {
  if (!a) return b;

  if (formats[b].size > formats[a].size) return b;

  if (formats[b].size < formats[a].size) return a;

  if (parseInt(formats[a].res, 10) > parseInt(formats[b].res, 10)) return a;

  return b;
};

export const fingHighestQualityFormat = (formats: Video['formats']) => {
  let formatName = '';

  for (const key in formats) {
    formatName = compareFormats(formats, formatName, key);
  }

  return {
    formatName,
    formatRes: parseInt(formats[formatName]?.res, 10),
  };
};
