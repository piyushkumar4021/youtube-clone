import {
  IoMdMenu,
  IoMdNotifications,
  IoMdAdd,
  IoMdSettings,
  IoMdSearch,
} from 'react-icons/io';
import logo from '../assets/logo.png';
import person from '../assets/person.png';

const Navbar = () => {
  const iconProps = {
    size: 28,
    color: '#27272a',
  };

  return (
    <div className='flex justify-between items-center px-4 py-2 shadow'>
      <div className='flex items-center gap-x-4'>
        <IoMdMenu className='cursor-pointer' {...iconProps} />
        <img
          className='h-8 cursor-pointer'
          src={logo}
          alt='Youtube Clone Logo'
        />
      </div>

      <div className='max-w-lg w-full flex items-center border border-zinc-600 rounded-full overflow-hidden px-3 py-1'>
        <input
          type='text'
          placeholder='Search'
          className='outline-none w-full'
        />
        <IoMdSearch className='cursor-pointer' {...iconProps} />
      </div>

      <div className='flex items-center gap-x-3'>
        <IoMdNotifications className='cursor-pointer' {...iconProps} />
        <IoMdAdd className='cursor-pointer' {...iconProps} />
        <IoMdSettings className='cursor-pointer' {...iconProps} />
        <img
          className='h-10 rounded-full cursor-pointer'
          src={person}
          alt='Your Photo'
        />
      </div>
    </div>
  );
};

export default Navbar;
