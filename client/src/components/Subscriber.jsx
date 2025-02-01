import React from 'react'
import { IoSend } from "react-icons/io5";

export default function Subscriber() {
    return (
        <div className="flex flex-col items-center pt-15 gap-y-5 pb-10 relative">
            <h2 className="text-4xl font-medium">Abonelerimize özel fırsatlar !</h2>
            <p className="text-lg">Bültenimize abone ol ayrıcalıklı kampanyalar ve çok sayıda iyi haber al!</p>
            <input
                type="text"
                className="text-sm border w-2/5 p-3 "
                placeholder="E-Posta adresinizi yazın..."
            />
            <a href="#" className="absolute right-110 top-45.5">
                <IoSend size={21} className="hover:scale-115 transition-all" />
            </a>
        </div>
    )
}
