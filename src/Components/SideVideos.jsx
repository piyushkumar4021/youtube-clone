import { Link } from 'react-router-dom';
import useVideos from './../hooks/useVideos';
import SideCard from './SideCard';

const SideVideos = ({ categoryId }) => {
  const {
    data: { items },
  } = useVideos(categoryId);

  return (
    <div className='flex flex-col gap-y-3'>
      {items?.map(({ snippet, statistics, id }) => (
        <Link key={id} to={`/video?v=${id}`}>
          <SideCard snippet={snippet} statistics={statistics} />
        </Link>
      ))}
    </div>
  );
};

export default SideVideos;
