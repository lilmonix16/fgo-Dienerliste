import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Main = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Main