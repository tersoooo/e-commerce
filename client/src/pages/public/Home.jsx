import Subscriber from "../../components/Subscriber.jsx";
import FollowUs from "../../components/FollowUs.jsx";
import Categories from "../../components/Categories.jsx";
import HomeSlider from "../../components/HomeSlider.jsx";
import HomeCategories from "../../components/HomeCategories.jsx";
import React from "react";

export default function Home() {
    return (
        <div>
            <HomeSlider/>
            <HomeCategories/>
            <Subscriber/>
            <FollowUs/>
        </div>
    )
}
