import { Link, useLocation } from 'wouter';

import { Paths } from '../paths';
import { Button } from './ui/Button';

export const AppHeader = () => {
  const [location] = useLocation();

  return (
    <>
      Videos
      {location !== Paths.CREATE_VIDEO ? (
        <Link to={Paths.CREATE_VIDEO}>
          <Button color="success">Add video</Button>
        </Link>
      ) : null}
    </>
  );
};
