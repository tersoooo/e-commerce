import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/public/Home.jsx";
import Categories from "./pages/public/Categories.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import CategoryDetails from "./components/CategoryDetails.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/category" element={<Categories />} />
                  <Route path="/category/:categoryName" element={<CategoryDetails />} />
              </Route>
              {/* Admin */}
              <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminHome />} />
              </Route>
          </Routes>
      </Router>
  )
}

export default App
