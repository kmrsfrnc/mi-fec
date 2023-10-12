interface FormatDefinition {
  res: string;
  size: number;
}

function compareFormats(formats: Record<string, FormatDefinition>, a: string | null, b: string): string {
  if (a === null) return b;

  if (formats[b].size > formats[a].size) return b;

  if (formats[b].size < formats[a].size) return a;

  if (parseInt(formats[a].res, 10) > parseInt(formats[b].res, 10)) return a;

  return b;
}

export function fingHighestQualityFormat(formats: Record<string, FormatDefinition>) {
  let name: string | null = null;

  for (const key in formats) {
    name = compareFormats(formats, name, key);
  }

  if (name === null) return null;

  return {
    name,
    res: parseInt(formats[name].res, 10),
  };
}
