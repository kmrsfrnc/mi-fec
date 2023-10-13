import { SearchFormConnected } from '../components/SearchFormConnected';
import { VideosTableConnected } from '../components/VideosTableConnected';

export const HomePage = () => {
  return (
    <>
      <h1>VManager Demo v0.0.1</h1>
      <SearchFormConnected />
      <VideosTableConnected />
    </>
  );
};
