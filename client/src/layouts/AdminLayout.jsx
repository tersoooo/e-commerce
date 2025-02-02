import React from 'react'
import {Outlet} from 'react-router-dom';
import Sidebar from "../components/admin/Sidebar.jsx";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <div className="fixed">
                <Sidebar/>
            </div>
            <div className="flex-1 ml-70 p-4 w-full overflow-x-hidden"> {/* Sayfanın taşmasını engeller */}
                <Outlet/>
            </div>
        </div>
    )
}
