import type { SelectHTMLAttributes } from 'react';

import styles from './Select.module.css';

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'>;

export const Select = (props: SelectProps) => {
  return <select {...props} className={styles.select} />;
};
