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
import Button from './Button';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Navbar = ({ toggleSide }) => {
  const iconProps = {
    size: 28,
    color: '#52525b',
  };

  console.log('Navbar');

  return (
    <div className='flex justify-between items-center px-4 py-3 shadow bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-x-4'>
        <Button onClick={toggleSide}>
          <Icon {...iconProps} icon={IoMdMenu} />
        </Button>
        <Link to='/'>
          <img className='h-6' src={logo} alt='Youtube Clone Logo' />
        </Link>
      </div>

      <div className='max-w-lg w-full flex items-center border border-neutral-500 rounded-full overflow-hidden px-3 py-1'>
        <input
          type='text'
          placeholder='Search'
          className='outline-none w-full'
        />
        <Button>
          <Icon icon={IoMdSearch} {...iconProps} />
        </Button>
      </div>

      <div className='flex items-center gap-x-3'>
        <Button>
          <Icon icon={IoMdNotifications} {...iconProps} />
        </Button>
        <Button>
          <Icon icon={IoMdAdd} {...iconProps} />
        </Button>
        <Button>
          <Icon icon={IoMdSettings} {...iconProps} />
        </Button>
        <Button>
          <img className='h-10 rounded-full' src={person} alt='Your Photo' />
        </Button>
      </div>
    </div>
  );
};

export default memo(Navbar);
