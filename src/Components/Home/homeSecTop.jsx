import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../image/iron.jpeg"
// Import Swiper styles

import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Pagination, Mousewheel, Keyboard } from "swiper";
const HomeSecTop = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>

            <div className="outer_box">
                <div className="home_sec_cont_block">
                    <div className="content_writen">
                        <div className="header_second">
                            <span className="one">
                            </span>
                            <br />
                            <span className="two">
                            </span>
                            <h1>Product</h1>

                        </div>
                        <br /><br /><br />
                        <div className="cont_header_second">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quaerat velit necessitatibus at enim vel reprehenderit est corrupti quae ab id eius, doloribus rem dolores! Voluptate quam voluptas laboriosam quis.</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo obcaecati saepe tenetur quae ipsum deserunt est, non voluptatum, magnam velit dicta eos alias doloribus consequuntur quidem perferendis. Laborum, quos.</p><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur optio iure fuga eveniet nisi odio quam! Iusto, laudantium vero. Sapiente ut, commodi nulla soluta repellendus fugiat vitae asperiores doloremque!
                            </p>
                            <br />
                        </div>

                    </div>
                    <div className="box_of_slider">
                        <Swiper
                            cssMode={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[ Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                            <SwiperSlide><img src={img}></img></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeSecTop