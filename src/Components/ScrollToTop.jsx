import { FaArrowUp } from 'react-icons/fa';
import Icon from './Icon';
import { useCallback, useEffect } from 'react';
import Button from './Button';

const ScrollToTop = ({ element }) => {
  useEffect(() => {
    element?.current.classList.add('scroll-mt-96');
  }, []);

  const handleScroll = useCallback(function handleScroll() {
    element?.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Button
      className='absolute bottom-10 right-8 z-50 bg-stone-200 p-3 rounded-full'
      onClick={handleScroll}
    >
      <Icon icon={FaArrowUp} />
    </Button>
  );
};

export default ScrollToTop;
