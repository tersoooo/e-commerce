import React from 'react'
import { FaInstagram, FaTwitter,FaShoppingBasket } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdHeart,IoIosSearch } from "react-icons/io";

export default function Header() {
    return (
        <div className="container mx-auto mt-4">
            <div className="grid grid-cols-3 items-center">
                <div className="flex gap-x-5">
                    <a href="#" className="hover:text-[#E4405F] transition-colors">
                        <FaInstagram size={21}/>
                    </a>
                    <a href="#" className="hover:text-sky-500 transition-colors">
                        <FaTwitter size={21}/>
                    </a>
                </div>

                <div className="text-center font-bold text-2xl">
                    <a href="/"><span className="text-sky-600 px-4">My</span>LOVE</a>
                </div>

                <div className="flex justify-end gap-x-3 items-center">
                    <div className="flex justify-start w-2/3 relative">
                        <input
                            type="text"
                            className="border border-[#666] hover:border-[#111] w-4/5 p-1  rounded text-sm px-7 focus:border-[#999] outline-none"
                            placeholder="Kazak, Pantolon, Mont, Giysi, Özel Gün Elbisesi"
                        />
                        <IoIosSearch size={19} className="absolute left-1 top-1.5 text-gray-900"/>
                    </div>
                    <a href="#">
                    <FiUser size={21} />
                    </a>
                    <a href="#">
                        <IoMdHeart size={21} className="text-red-500 hover:text-red-400 transition-colors" />
                    </a>
                    <a href="#" className="flex items-center gap-x-1">
                        <FaShoppingBasket size={21} />
                        <p className="text-xs font-semibold">3</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
