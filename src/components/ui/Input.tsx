import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  let className = styles.input;

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <input {...props} className={className} />;
};
