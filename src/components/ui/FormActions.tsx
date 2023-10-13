import { PropsWithChildren } from 'react';

import styles from './FormActions.module.css';

export const FormActions = (props: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.inner}>{props.children}</div>
    </div>
  );
};
