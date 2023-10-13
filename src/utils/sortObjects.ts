export const sortObjects = <G>(items: G[], key: keyof G | null, sortDescending: boolean = false) => {
  if (!key) {
    return items;
  }

  const sorted = [...items].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) {
      return -1;
    }

    if (aValue > bValue) {
      return 1;
    }

    return 0;
  });

  if (sortDescending) {
    return [...sorted].reverse();
  }

  return sorted;
};
