import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type ButtonColor = 'success' | 'primary' | 'danger' | 'info';

type ButtonBaseProps = {
  color?: ButtonColor;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const colorClassMap: Record<ButtonColor, string> = {
  success: styles.success,
  primary: styles.primary,
  danger: styles.danger,
  info: styles.info,
};

export const Button = ({ color, className, ...props }: ButtonProps) => {
  let classes = styles.button;

  if (color) {
    classes += ` ${colorClassMap[color]}`;
  }

  if (className) {
    classes += ` ${className}`;
  }

  return <button className={classes} {...props} />;
};
