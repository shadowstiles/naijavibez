import { useContext } from "react";
import { NewsContext } from "../../context/news.context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./swiper.style.scss";
import { Link, useParams } from "react-router-dom";

const Slide = () => {
  const { finalNews } = useContext(NewsContext);

  if (finalNews.length === 0) return;

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <div className="swiper sliderFeaturedPosts">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                speed={500}
                loop={true}
                centeredSlides={true}
                slideToClickedSlide={true}
                autoplay={{
                  delay: 10000,
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
                className="swiper-wrapper"
              >
                {finalNews
                  .filter((_, i) => i < 6)
                  .map((news) => {
                    const {
                      heading,
                      paragraphbrief,
                      imageurl,
                      newsid,
                      category,
                    } = news;

                    return (
                      <SwiperSlide className="swiper-slide" key={newsid}>
                        <Link
                          to={`news/${category[0]}/${newsid}`}
                          className="img-bg d-flex align-items-end"
                          style={{ backgroundImage: `url(${imageurl} )` }}
                        >
                          <div className="img-bg-inner">
                            <h2>{heading}</h2>
                            <p>{paragraphbrief}</p>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <div className="custom-swiper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
