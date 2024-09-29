import Icon from './Icon';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import Button from './Button';
import moment from 'moment';
import converter from './../Services/converter';
import useToggle from './../hooks/useToggle';

const Description = ({ item }) => {
  const { snippet, statistics } = item || {};
  const [isVisible, toggleVisibility] = useToggle();

  const getClass = () =>
    `text-wrap font-sans ${isVisible ? 'line-clamp-none' : 'line-clamp-3'}`;

  return (
    <div className='mt-6 bg-stone-100 rounded-xl p-4 relative'>
      <pre className={getClass()}>
        <div className='font-semibold'>
          {converter(statistics?.viewCount)} views {' | '}
          {moment(snippet?.publishedAt).fromNow()}
        </div>
        {snippet?.description}
      </pre>

      <Button className='absolute top-3 right-5' onClick={toggleVisibility}>
        <Icon
          icon={isVisible ? FaChevronDown : FaChevronUp}
          size={20}
          color='#404040'
        />
      </Button>
    </div>
  );
};

export default Description;
