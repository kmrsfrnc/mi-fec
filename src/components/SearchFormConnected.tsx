import { useUiStore } from '../store/useUiStore';
import { SearchForm } from './SearchForm';

export const SearchFormConnected = () => {
  const { setSearch, search } = useUiStore();

  return <SearchForm onSearch={setSearch} value={search} />;
};
