import moment from 'moment';
import converter from '../Services/converter';

const Card = ({ item: { snippet, statistics } }) => {
  return (
    <div className='w-80'>
      <img
        className='h-44 w-full overflow-hidden object-cover rounded-xl mb-2'
        src={snippet.thumbnails.high.url}
        alt=''
      />
      <h3 className='text-lg font-semibold leading-tight'>{snippet.title}</h3>
      <p className='text-neutral-600 font-medium'>{snippet.channelTitle}</p>
      <span className='flex items-center gap-x-1'>
        {converter(statistics.viewCount)} Views
        {statistics.viewCount && (
          <span className='w-1 h-1 rounded-full bg-neutral-600 inline-block'></span>
        )}
        {moment(snippet.publishedAt).fromNow()}
      </span>
    </div>
  );
};

export default Card;
