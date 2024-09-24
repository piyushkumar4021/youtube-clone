import Card from './Card';
import useVideos from '../hooks/useVideos';
import Spinner from './Spinner';

const Feed = ({ sideLabels, category }) => {
  const {
    data: { items },
    isLoading,
  } = useVideos(category);

  if (isLoading)
    return (
      <div
        className={`pt-6 flex justify-center bg-neutral-100 min-h-screen text-blue-600`}
      >
        <Spinner />
      </div>
    );

  return (
    <div
      className={`${
        sideLabels ? 'pl-56' : 'pl-24'
      } pt-6 pb-8 pr-4 flex flex-wrap gap-x-3 gap-y-6 justify-center bg-neutral-100`}
    >
      {items?.map((i) => (
        <Card key={i.id} item={i} />
      ))}
    </div>
  );
};

export default Feed;
