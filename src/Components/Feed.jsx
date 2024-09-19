import Card from './Card';
import useVideos from '../hooks/useVideos';

const Feed = ({ sideLabels, category }) => {
  const {
    data: { items },
  } = useVideos(category);

  return (
    <div
      className={`${
        sideLabels ? 'pl-56' : 'pl-24'
      }  pt-24 pb-8 pr-4 flex flex-wrap gap-x-3 gap-y-6 justify-center bg-neutral-100`}
    >
      {items?.map((i) => (
        <Card key={i.id} item={i} />
      ))}
    </div>
  );
};

export default Feed;
