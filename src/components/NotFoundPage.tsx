import { Link } from 'wouter';
import { ErrorPage } from './ErrorPage';
import { Paths } from '../paths';
import { Button } from './ui/Button';

export const NotFoundPage = () => {
  return (
    <ErrorPage message="Page not found">
      <Link to={Paths.HOME}>
        <Button color="info">Go to home</Button>
      </Link>
    </ErrorPage>
  );
};
