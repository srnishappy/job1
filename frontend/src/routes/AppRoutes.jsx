import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Approutes;
