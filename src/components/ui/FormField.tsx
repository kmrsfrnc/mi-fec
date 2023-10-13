import { PropsWithChildren } from 'react';

import styles from './FormField.module.css';

interface FormFieldProps {
  label: React.ReactNode;
  htmlFor?: string;
}

export function FormField(props: PropsWithChildren<FormFieldProps>) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.htmlFor} className={styles.label}>
        {props.label}
      </label>
      <span className={styles.children}>{props.children}</span>
    </div>
  );
}
