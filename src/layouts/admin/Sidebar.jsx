import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <NavLink to={'/admin'} end>
        Dashboard
      </NavLink>
      <NavLink to={'/admin/users'}>Users</NavLink>
      <NavLink to={'/admin/categories'}>Categories</NavLink>
    </div>
  );
}
