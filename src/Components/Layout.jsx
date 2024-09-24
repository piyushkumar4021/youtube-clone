import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ toggleSide }) => {
  return (
    <>
      <Navbar toggleSide={toggleSide} />
      <Outlet />
    </>
  );
};

export default Layout;
