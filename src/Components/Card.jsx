import moment from 'moment';
import converter from '../Services/converter';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { snippet, statistics, id } = item;

  return (
    <div className='w-80'>
      <Link to={`/video/${id}`}>
        <img
          className='h-44 w-full overflow-hidden object-cover rounded-xl mb-2'
          src={snippet.thumbnails.high.url}
        />
        <h3 className='text-lg font-semibold leading-tight'>{snippet.title}</h3>
      </Link>

      <p className='text-neutral-600 font-medium'>{snippet.channelTitle}</p>
      <div className='flex items-center gap-x-1'>
        {converter(statistics.viewCount)} Views
        {statistics.viewCount && (
          <span className='w-1 h-1 rounded-full bg-neutral-600 inline-block'></span>
        )}
        {moment(snippet.publishedAt).fromNow()}
      </div>
    </div>
  );
};

export default Card;
