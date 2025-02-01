import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeSlider() {
    return (
        <div className="pt-7">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 3000}}
                loop={true}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://static.ticimax.cloud/cdn-cgi/image/width=1425,quality=99/30743/uploads/sayfatasarim/sayfa38/title-87e7e773-2.jpg"
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://static.ticimax.cloud/cdn-cgi/image/width=1425,quality=99/30743/uploads/sayfatasarim/sayfa38/title-8cf1fd1b-3.jpg"
                        alt="Slide 2"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
