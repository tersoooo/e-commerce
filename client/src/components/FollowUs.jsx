import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FollowUs() {
    return (
        <div className="grid grid-cols-2 p-5 border-t border-b border-t-gray-300 border-b-gray-300">
            <div className="px-20 flex items-center gap-x-10">
                <h3 className="text-2xl font-medium">Bizi Takip Edin</h3>
                <FaInstagram size={25} />
                <FaTwitter size={25} />
                <FaYoutube size={25} />
            </div>
            <div className="flex gap-x-15 items-center">
                <h3 className="text-2xl font-medium">Uygulamayı İndirin</h3>
                <a href="#">
                    <img src="https://static.ticimax.cloud/30743/Uploads/EditorUploads/play.jpg" alt=""/>
                </a>
                <a href="#">
                    <img src="https://static.ticimax.cloud/30743/Uploads/EditorUploads/app.jpg" alt=""/>
                </a>
            </div>
        </div>
    )
}
