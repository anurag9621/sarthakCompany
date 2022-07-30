import TopBarofProFea from "../topBarOfProFea";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Al from "../../image/people.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./a.css";

// import required modules
import { Pagination } from "swiper";

const TopBar = () => {
  return (
    <>
      <TopBarofProFea headTop="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      <br />
      <br />
      <br />
      <div className="outer_boxproduct_one">
        <div className="product_one_one">
          <div className="header_second">
            <span className="one"></span>
            <br />
            <span className="two"></span>
            <h1>Our Product</h1>
          </div>
          <br />
          <div className="content-produnt-heading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            dolore vitae quas explicabo illo, a aspernatur id, ullam minus odit
            mollitia accusamus facere fuga praesentium quasi officiis quibusdam
            non consequuntur!
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="slider_box_product">
        <div className="slider_box_product_under">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="product_slider_all_box">
                <div className="product_image_slider">
                  <img src={Al} alt="" />
                </div>
                <br />
                <div className="product_slider_content_box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia modi, aut quae beatae aliquam eius maxime dolores
                    dolore ut, ullam ex! Modi, ipsum iusto vero beatae
                    perferendis facere numquam eveniet.
                  </p>
                </div>
                <br />
              </div>
            </SwiperSlide>
            <br />
            <br />
            <br />
          </Swiper>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
     
    </>
  );
};
export default TopBar;
