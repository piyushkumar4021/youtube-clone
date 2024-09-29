import Card from './Card';
import useVideos from '../hooks/useVideos';
import ScrollToTop from '../Components/ScrollToTop';
import { useRef } from 'react';

const Feed = ({ category }) => {
  const { data } = useVideos(category);
  const { items } = data;
  const scrollRef = useRef();

  return (
    <>
      <div
        ref={scrollRef}
        className={`videos-grid p-3 md:p-6 w-full gap-x-4 gap-y-6 justify-center bg-neutral-100`}
      >
        {items?.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
      <ScrollToTop element={scrollRef} />
    </>
  );
};

export default Feed;
