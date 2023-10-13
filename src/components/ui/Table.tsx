import { TableHTMLAttributes } from 'react';

import styles from './Table.module.css';

type TableProps = TableHTMLAttributes<HTMLTableElement>;

export const Table = (props: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table} {...props} />
    </div>
  );
};
