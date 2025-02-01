import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="grid grid-cols-4 container mx-auto px-6 pt-15 py-20">
            <div className="">
                <h3 className="text-2xl font-medium pb-5">Yardım</h3>
                <ul className="flex flex-col gap-y-4">
                    <li>
                        <a href="#" className="hover:underline">DEĞİŞİM BİLGİLENDİRME</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">KOLAY DEĞİŞİM</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Sipariş Sorgulama</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Beden Tablosu</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">İşlem Rehberi</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Kargo & Teslimat</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">KVKK WhatsApp</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-2xl font-medium pb-5">Kurumsal</h3>
                <ul className="flex flex-col gap-y-4">
                    <li>
                        <a href="#" className="hover:underline">Hakkımızda</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Mağazalarımız</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Gizlilik & Güvenlik</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Müşteri Hizmetleri</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Bize Ulaşın</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-2xl font-medium pb-5">İlgini Çekebilir</h3>
                <ul className="flex flex-col gap-y-4">
                    <li>
                        <a href="#" className="hover:underline">Elbise</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Ceket</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Mont</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Pantolon</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Tişört</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Jean</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <h3 className="text-2xl font-medium pb-5">Yardıma İhtiyacın Var Mı?</h3>
                <div className="">
                    <div className="flex items-center gap-x-2 border justify-center py-2">
                        <FaSquareWhatsapp size={25} />
                        <span className="text-lg font-medium">WhatsApp</span>
                    </div>
                    <p className="text-xs text-gray-500 flex justify-center pt-2">
                        Hafta içi 09:00 ile 19:00 arası <br />
                        Cumartesi 09:00 ile 14:00 arası
                    </p>
                </div>
            </div>
        </div>
    )
}
