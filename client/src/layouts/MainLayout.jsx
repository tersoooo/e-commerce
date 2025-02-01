import React from 'react'
import { Outlet } from 'react-router-dom';
import Notice from "../components/Notice.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BottomSide from "../components/BottomSide.jsx";
import Categories from "../components/Categories.jsx";

export default function MainLayout() {
    return (
        <div>
            <Notice />
            <Header />
            <Categories />
            <Outlet />
            <Footer />
            <BottomSide />
        </div>
    )
}
