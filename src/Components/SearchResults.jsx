import { useParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import SearchResultCard from './SearchResultCard';
import { useRef } from 'react';
import ScrollToTop from './ScrollToTop';

const SearchResults = () => {
  const { q } = useParams();
  const { data } = useSearch(q);
  const { items } = data;
  const scrollRef = useRef();

  return (
    <>
      <ScrollToTop element={scrollRef} />
      <div
        ref={scrollRef}
        className='flex flex-col gap-y-5 items-center max-w-7xl mx-auto my-7'
      >
        {items?.map(({ id, snippet }) => (
          <SearchResultCard
            key={id.videoId}
            vId={id.videoId}
            snippet={snippet}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
