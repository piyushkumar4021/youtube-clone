import moment from 'moment';
import { Link } from 'react-router-dom';

const SearchResultCard = ({ vId, snippet }) => {
  return (
    <Link className='w-full flex justify-start gap-x-4' to={`/video/${vId}`}>
      <img
        className='rounded-xl object-cover w-full max-w-lg max-h-72'
        src={snippet.thumbnails.high.url}
        alt=''
      />
      <div>
        <h2 className='font-semibold text-lg'>{snippet.title}</h2>
        <div className='mb-2'>{moment(snippet.publishedAt).fromNow()}</div>
        <div className='tracking-wide mb-1'>{snippet.channelTitle}</div>
        <div className='text-sm'>{snippet.description}</div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
