import { PropsWithChildren } from 'react';

interface ErrorPageProps {
  message?: string;
}

export function ErrorPage({ message, children }: PropsWithChildren<ErrorPageProps>) {
  return (
    <>
      <h1>{'Something went wrong'}</h1>
      <p>{message || 'We are not sure what '}</p>
      {children}
    </>
  );
}
