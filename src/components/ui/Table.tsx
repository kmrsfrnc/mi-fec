import { PropsWithChildren } from 'react';

import styles from './Table.module.css';

export const Table = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};
