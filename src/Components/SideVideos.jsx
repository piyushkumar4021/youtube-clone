import { Link } from 'react-router-dom';
import useVideos from './../hooks/useVideos';
import converter from './../Services/converter';
import moment from 'moment';

const SideVideos = ({ categoryId }) => {
  const { data } = useVideos(categoryId);

  return (
    <div className='flex flex-col gap-y-3'>
      {data.map(({ snippet, statistics, id }) => (
        <Link key={id} to={`/video?v=${id}`}>
          <div className='flex gap-x-2'>
            <img
              className='flex-none w-40 h-20 rounded-lg overflow-hidden object-cover'
              src={snippet?.thumbnails?.standard?.url}
            />

            <div>
              <h3 className='text-sm font-medium leading-tight line-clamp-2'>
                {snippet?.title}
              </h3>

              <div className='text-xs mt-1'>{snippet?.channelTitle}</div>

              <div className='flex items-center gap-x-1 text-xs'>
                {converter(statistics?.viewCount)} Views
                <span className='w-1 h-1 rounded-full bg-neutral-600 inline-block'></span>
                {moment(snippet?.publishedAt).fromNow()}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideVideos;
