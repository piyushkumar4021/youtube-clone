import Icon from './Icon';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import Button from './Button';
import moment from 'moment';
import converter from './../Services/converter';

const Description = ({ item }) => {
  const { snippet, statistics } = item || {};
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='mt-6 bg-stone-100 rounded-xl p-4 relative'>
      <pre
        className={`text-wrap font-sans line-clamp-${isHidden ? '3' : 'none'}`}
      >
        <div className='font-semibold'>
          {converter(statistics?.viewCount)} views {' | '}
          {moment(snippet?.publishedAt).fromNow()}
        </div>
        {snippet?.description}
      </pre>

      <Button
        className='absolute top-3 right-5'
        onClick={() => setIsHidden(!isHidden)}
      >
        <Icon
          icon={isHidden ? FaChevronDown : FaChevronUp}
          size={20}
          color='#404040'
        />
      </Button>
    </div>
  );
};

export default Description;
