import React, { useState } from 'react';

export default function Categories() {
    const [dropDown, setDropDown] = useState(false);

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
                            {/* Üst Giyim */}
                            <div>
                                <h3 className="font-bold text-2xl text-gray-800 mb-2">ÜST GİYİM</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-blue-500">Tüm Üstleri Keşfet!</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Kazak</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Sweatshirt</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Gömlek</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Bluz</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Crop Top</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Tshirt</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Süveter</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Takımlar</a></li>
                                </ul>
                            </div>

                            {/* Alt Giyim */}
                            <div>
                                <h3 className="font-bold text-2xl text-gray-800 mb-2">ALT GİYİM</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-blue-500">Tüm Altları Keşfet!</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Pantolon</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Jean</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Tayt</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Eşofman</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Etek</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Şort</a></li>
                                </ul>
                            </div>

                            {/* Dış Giyim */}
                            <div>
                                <h3 className="font-bold text-2xl text-gray-800 mb-2">DIŞ GİYİM</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-blue-500">Tüm Dış Giyimi Keşfet!</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Mont</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Kaban</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Ceket</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Yelek</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Hırka</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Trençkot</a></li>
                                </ul>
                            </div>

                            {/* Elbise */}
                            <div>
                                <h3 className="font-bold text-2xl text-gray-800 mb-2">ELBİSE</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-blue-500">Elbise</a></li>
                                </ul>
                            </div>
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