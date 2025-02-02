import React, {useEffect, useState} from 'react';
import { getCategories } from "../../firebase/firestoreService.js";
import { NavLink } from 'react-router-dom';
import {slugify} from "../utils/helper.js";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const data = await getCategories();
                setCategories(data);
            }catch (err){
                console.error("Kategoriler yüklenirken hata oluştu:", error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <div className="relative w-full z-50">
            <ul className="flex gap-x-5 justify-center mt-6 text-sm font-medium">
                {/* YENİ GELENLER */}
                <li className="relative group">
                    <a href="#" className="block relative">
                        YENİ GELENLER
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>

                {/* GİYİM (DROPDOWN) */}
                <li
                    className="relative group"
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                >
                    <a href="#" className="block relative">
                        GİYİM
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>

                    {/* Dropdown Menü (Animasyonlu) */}
                    <div
                        className={`fixed top-28 left-0 w-full bg-white shadow-lg min-h-[50px] p-6 transition-all duration-300 ease-in-out transform origin-top ${
                            dropDown ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        }`}
                    >
                        <div className="grid grid-cols-4 ml-40 pt-4 gap-6">
                            {categories.map(cat => (
                                <ul>
                                    <li key={cat.id}>
                                        <NavLink
                                            className="hover:underline"
                                            to={`/category/${slugify(cat.name)}`}
                                        >
                                            {cat.name}
                                        </NavLink>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </li>

                {/* Diğer Menüler */}
                <li className="relative group">
                    <a href="#" className=" block relative">
                        PARTY
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
                <li className="relative group">
                    <a href="#" className=" block relative">
                        MY BASIC
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
                <li className="relative group">
                    <a href="#" className=" block relative">
                        ÇOK SATANLAR
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}