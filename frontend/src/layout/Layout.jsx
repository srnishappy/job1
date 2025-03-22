import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <MainNav />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
export default Layout;
