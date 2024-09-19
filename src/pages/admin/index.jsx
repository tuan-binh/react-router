import Navbar from '../../layouts/admin/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../layouts/admin/Sidebar';

export default function AdminIndex() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%] bg-cyan-600">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
