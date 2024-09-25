import { useParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import SearchResultCard from './SearchResultCard';

const SearchResults = () => {
  const { q } = useParams();
  const { data } = useSearch(q);
  const { items } = data;
  console.log(items);

  return (
    <div className='flex flex-col gap-y-5 items-center max-w-7xl mx-auto my-7'>
      {items?.map(({ etag, snippet }) => (
        <SearchResultCard key={etag} snippet={snippet} />
      ))}
    </div>
  );
};

export default SearchResults;
