import { SearchFormConnected } from '../components/SearchFormConnected';
import { VideosTableConnected } from '../components/VideosTableConnected';

export function Home() {
  return (
    <>
      <h1>VManager Demo v0.0.1</h1>
      <SearchFormConnected />
      <VideosTableConnected />
    </>
  );
}
