import { useContext } from "react";
import { NewsContext } from "../../context/news.context";
import SwiperSlider from "./swiper-slide.component";

import { Swiper } from "swiper/react";

import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swiper.style.scss";

import { Autoplay, Navigation, Pagination } from "swiper";

const Slide = () => {
  const { finalNews } = useContext(NewsContext);

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper
              spaceBetween={0}
              speed={500}
              loop={true}
              centeredSlides={true}
              slideToClickedSlide={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="swiper sliderFeaturedPosts"
            >
              <div class="swiper-wrapper">
                {finalNews
                  .filter((_, i) => i < 6)
                  .map((news, id) => (
                    <SwiperSlider news={news} key={news.newsid} id={id} />
                  ))}
              </div>
              <div className="custom-swiper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
