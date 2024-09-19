import AdminIndex from '../pages/admin';
import Categories from '../pages/admin/Categories';
import Dashboard from '../pages/admin/Dashboard';
import ManageUser from '../pages/admin/ManageUser';
import UserIndex from '../pages/user';
import { createBrowserRouter } from 'react-router-dom';

const routesConfig = createBrowserRouter([
  {
    path: '/',
    element: <UserIndex />,
  },
  {
    path: '/admin',
    element: <AdminIndex />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <ManageUser />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
]);

export default routesConfig;
