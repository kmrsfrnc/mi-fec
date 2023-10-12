import type { SelectHTMLAttributes } from 'react';

import styles from './Select.module.css';

type InputProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'>;

export const Select = (props: InputProps) => {
  return <select {...props} className={styles.select} />;
};
