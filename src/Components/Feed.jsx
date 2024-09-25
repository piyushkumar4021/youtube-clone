import Card from './Card';
import useVideos from '../hooks/useVideos';

const Feed = ({ category }) => {
  const { data } = useVideos(category);
  const { items } = data;
  console.log(items);

  return (
    <div
      className={`videos-grid p-6 w-full gap-x-4 gap-y-6 justify-center bg-neutral-100`}
    >
      {items?.map((i) => (
        <Card key={i.id} item={i} />
      ))}
    </div>
  );
};

export default Feed;
