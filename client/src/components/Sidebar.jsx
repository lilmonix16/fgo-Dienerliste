import { FaHome, FaSearch } from 'react-icons/fa'
const Sidebar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col bg-gray-900 text-white shadow-lg">
            <SidebarIcon icon={<FaHome size="30"/>} text={"Home"}/>
            <SidebarIcon icon={<FaSearch size="30"/>} text={"Search"}/>
        </div>
    );
};

const SidebarIcon = ({ icon, text }) => {
    return (
        <div className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    );
};

export default Sidebar
