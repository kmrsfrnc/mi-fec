import { PropsWithChildren } from 'react';

interface ErrorPageProps {
  message?: string;
}

export const ErrorPage = ({ message, children }: PropsWithChildren<ErrorPageProps>) => {
  return (
    <>
      <h1>{'Something went wrong'}</h1>
      <p>{message || 'We are not sure what '}</p>
      {children}
    </>
  );
};
