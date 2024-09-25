import { IoMdSearch } from 'react-icons/io';
import Icon from './Icon';
import Button from './Button';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate(`/search/${inputRef.current.value}`);
      }}
      className='max-w-lg w-full flex items-center border border-neutral-500 rounded-full px-3 py-1'
    >
      <input
        type='text'
        placeholder='Search'
        ref={inputRef}
        className='outline-none w-full'
      />

      <Button>
        <Icon icon={IoMdSearch} />
      </Button>
    </form>
  );
};

export default SearchInput;
