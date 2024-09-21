import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ setSideLabels }) => {
  return (
    <>
      <Navbar setSideLabels={setSideLabels} />
      <Outlet />
    </>
  );
};

export default Layout;
