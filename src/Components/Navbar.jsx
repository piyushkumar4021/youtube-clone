import {
  IoMdMenu,
  IoMdNotifications,
  IoMdAdd,
  IoMdSettings,
  IoMdSearch,
} from 'react-icons/io';
import logo from '../assets/logo.png';
import person from '../assets/person.png';
import Icon from './Icon';

const Navbar = ({ setSideLabels }) => {
  const iconProps = {
    size: 28,
    color: '#52525b',
  };

  return (
    <div className='flex justify-between items-center px-4 py-3 pr-8 shadow bg-white fixed w-screen z-10'>
      <div className='flex items-center gap-x-4'>
        <Icon
          className='cursor-pointer'
          {...iconProps}
          icon={IoMdMenu}
          onClick={() => setSideLabels((prev) => !prev)}
        />
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
        <Icon className='cursor-pointer' icon={IoMdSearch} {...iconProps} />
      </div>

      <div className='flex items-center gap-x-3'>
        <Icon
          className='cursor-pointer'
          icon={IoMdNotifications}
          {...iconProps}
        />
        <Icon className='cursor-pointer' icon={IoMdAdd} {...iconProps} />
        <Icon className='cursor-pointer' icon={IoMdSettings} {...iconProps} />
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
