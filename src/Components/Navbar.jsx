import {
  IoMdMenu,
  IoMdNotifications,
  IoMdAdd,
  IoMdSettings,
} from 'react-icons/io';
import logo from '../assets/logo.png';
import person from '../assets/person.png';
import Icon from './Icon';
import Button from './Button';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import SearchInput from './SearchInput';

const Navbar = ({ toggleSide }) => {
  const iconProps = {
    size: 28,
    color: '#52525b',
  };

  return (
    <div className='flex-grow-0 flex justify-between items-center px-4 py-3 shadow bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-x-4'>
        <Button onClick={toggleSide}>
          <Icon {...iconProps} icon={IoMdMenu} />
        </Button>
        <Link to='/'>
          <img className='h-6' src={logo} alt='Youtube Clone Logo' />
        </Link>
      </div>

      <SearchInput />

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
