import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/public/Home.jsx";
import Categories from "./pages/public/Categories.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import CategoryDetails from "./components/CategoryDetails.jsx";
import AddCategory from "./pages/admin/AddCategory.jsx";
import ShowCategory from "./components/admin/ShowCategory.jsx";
import Users from "./pages/admin/Users.jsx";
import Tickets from "./pages/admin/Tickets.jsx";
import Settings from "./pages/admin/Settings.jsx";


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/category" element={<Categories/>}/>
                        <Route path="/category/:categoryName" element={<CategoryDetails/>}/>
                    </Route>
                    {/* Admin */}
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route index element={<AdminHome/>}/>
                        <Route path="/admin/add-category" element={<AddCategory/>}/>
                        <Route path="/admin/category" element={<ShowCategory/>}/>
                        <Route path="/admin/users" element={<Users />} />
                        <Route path="/admin/tickets" element={<Tickets />} />
                        <Route path="/admin/settings" element={<Settings />} />
                    </Route>
                </Routes>
            </Router>
            <ToastContainer position="top-right" autoClose={2000} />
        </>
    )
}

export default App
