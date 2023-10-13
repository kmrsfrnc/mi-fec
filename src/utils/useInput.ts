import { ChangeEvent, useMemo, useState } from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return useMemo(
    () => ({
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      },
      value,
    }),
    [value, setValue]
  );
};
