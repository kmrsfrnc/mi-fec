import { ChangeEvent, useCallback } from 'react';

import { Category } from '../common/interfaces';
import { toString } from '../utils/toString';
import { Select, SelectProps } from './ui/Select';

type CategoriesSelectProps = {
  categories: Category[];
  value: number[];
  setValue: (value: number[]) => void;
} & Omit<SelectProps, 'value'>;

export const CategoriesSelect = ({ categories, value, setValue, ...props }: CategoriesSelectProps) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const options = Array.from(event.target.selectedOptions);
      const values = options.map((option) => {
        return parseInt(option.value, 10);
      });

      setValue(values);
    },
    [setValue]
  );

  return (
    <Select value={value.map(toString)} onChange={onChange} multiple {...props}>
      {categories.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};
