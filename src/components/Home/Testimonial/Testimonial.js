import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialInfo from "../TestimonialInfo/TestimonialInfo";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/core";

const Testimonial = () => {
  SwiperCore.use([EffectCoverflow, Autoplay, Navigation, Pagination]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-cliffs-04770.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div id="testimonial">
      <div className="text-center margin">
        <h5>
          <span className="color">OUR</span> TESTIMONIAL
        </h5>
        <h2>WHAT OUR CLIENTS SAY</h2>
      </div>
      <div className="width-maintain">
        <div className="text-center">
          {reviewData.length === 0 && (
            <Spinner animation="border" variant="success" />
          )}
        </div>
        <div>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            {reviewData.map((review) => {
              return (
                <SwiperSlide key={review._id}>
                  <TestimonialInfo review={review}></TestimonialInfo>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
