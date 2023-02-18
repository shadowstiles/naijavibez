import { SwiperSlide } from "swiper/react";
import "./swiper/swiper-bundle.css";

import "./swiper.style.scss";

const SwiperSlider = ({ news }) => {
  const { heading, paragraphbrief, imageurl } = news;

  return (
    <SwiperSlide className="swiper-slide">
      <a
        href="single-post.html"
        className="img-bg d-flex align-items-end"
        style={{ backgroundImage: `url(${imageurl} )` }}
      >
        <div className="img-bg-inner">
          <h2>{heading}</h2>
          <p>{paragraphbrief}</p>
        </div>
      </a>
    </SwiperSlide>
  );
};

export default SwiperSlider;
