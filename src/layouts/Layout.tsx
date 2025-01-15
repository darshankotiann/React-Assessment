import { ArrowUpDown, Bot } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';

const Layout = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <TopBar profileTag="DK" firstIcon={<ArrowUpDown size={16} />} secondIcon={<Bot size={16} />} />
            <div className="main-content bg-gray-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;