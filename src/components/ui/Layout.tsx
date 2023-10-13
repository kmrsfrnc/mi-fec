import { PropsWithChildren } from 'react';

import styles from './Layout.module.css';

interface LayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
}

export const Layout = ({ header, footer, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </>
  );
};
