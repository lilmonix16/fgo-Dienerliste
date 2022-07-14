import { FaHome, FaSearch, FaListUl } from 'react-icons/fa'
const Sidebar = () => {

    return (
        <div className="hidden lg:flex lg:flex-col fixed top-0 left-0 h-screen w-16 bg-gray-900">
            {/* <div className='fixed top-10 left-0 h-screen w-16
                        flex flex-col text-white shadow-lg'> */}
                <SidebarIcon icon={<FaHome size="28"/>} text={"Home"}/>
                <div class="relative flex py-1 items-center px-4">
                    <div class="flex-grow border-t border-gray-600"></div>
                </div>
                <SidebarIcon icon={<FaSearch size="28"/>} text={"Search"}/>
                <SidebarIcon icon={<FaListUl size="28"/>} text={"Servant List"}/>
            {/* </div> */}
        </div>
    );
};

const SidebarIcon = ({ icon, text }) => {
    return (
        <div className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip hover-avail:group-hover:scale-100'>
                {text}
            </span>
        </div>
    );
};

export default Sidebar
