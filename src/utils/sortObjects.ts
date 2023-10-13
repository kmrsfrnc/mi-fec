export const sortObjects = <G>(items: G[], key?: keyof G, direction: 'ASC' | 'DESC' = 'ASC') => {
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

  if (direction === 'DESC') {
    return [...sorted].reverse();
  }

  return sorted;
};
