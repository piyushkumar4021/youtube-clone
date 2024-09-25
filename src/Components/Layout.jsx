import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ toggleSide }) => {
  return (
    <div className='h-screen flex flex-col overflow-y-scroll'>
      <Navbar toggleSide={toggleSide} />
      <Outlet />
    </div>
  );
};

export default Layout;
