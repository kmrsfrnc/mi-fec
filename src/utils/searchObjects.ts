export const searchObjects = <G extends Object>(objects: G[], keyword: string) => {
  if (!keyword) return objects;

  return objects.filter((item) => {
    const values = Object.values(item).join(' ');
    const haystack = values.toLowerCase();
    const needle = keyword.toLowerCase();

    return haystack.indexOf(needle) >= 0;
  });
};
