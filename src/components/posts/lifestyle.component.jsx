import { useContext } from "react";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import PostEntryBottom from "./post-entry-bottom.component";
import PostEntry from "./post-entry.component";

import "./posts.style.scss";

const Lifestyle = () => {
  const { finalNews } = useContext(NewsContext);

  // const lifestyleNews = finalNews.filter((news) => news.category === "lifestyle");

  //This will be deleted on publication
  const lifestyleNews = finalNews;

  const { imageurl, heading, published, paragraphbrief, author } =
    lifestyleNews[0];

  const {
    heading: heading2,
    published: published2,
    author: author2,
  } = lifestyleNews[1];

  const {
    heading: heading3,
    published: published3,
    author: author3,
  } = lifestyleNews[2];

  return (
    <section className="category-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Lifestyle</h2>
          <div>
            <a href="category.html" className="more">
              See All Lifestyle
            </a>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <div className="post-entry-1 lg">
              <a href="single-post.html">
                <img src={imageurl} alt="" className="img-fluid" />
              </a>
              <div className="post-meta">
                <span className="date">Lifestyle</span>{" "}
                <span className="mx-1">&bullet;</span>{" "}
                <span>{setDate(published)}</span>
              </div>
              <h2>
                <a href="single-post.html">{heading}</a>
              </h2>
              <p className="mb-4 d-block">{paragraphbrief}</p>

              <div className="d-flex align-items-center author">
                <div className="name">
                  <h3 className="m-0 p-0">{author}</h3>
                </div>
              </div>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta">
                <span className="date">Lifestyle</span>{" "}
                <span className="mx-1">&bullet;</span>{" "}
                <span>{setDate(published2)}</span>
              </div>
              <h2 className="mb-2">
                <a href="single-post.html">{heading2}</a>
              </h2>
              <span className="author mb-3 d-block">{author2}</span>
            </div>

            <div className="post-entry-1">
              <div className="post-meta">
                <span className="date">Lifestyle</span>{" "}
                <span className="mx-1">&bullet;</span>{" "}
                <span>{setDate(published3)}</span>
              </div>
              <h2 className="mb-2">
                <a href="single-post.html">{heading3}</a>
              </h2>
              <span className="author mb-3 d-block">{author3}</span>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {lifestyleNews
                  .filter((_, i) => i > 2 && i < 6)
                  .map((news) => (
                    <PostEntry news={news} />
                  ))}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {lifestyleNews
                  .filter((_, i) => i > 5 && i < 9)
                  .map((news) => (
                    <PostEntry news={news} />
                  ))}
              </div>
              <div className="col-lg-4">
                {lifestyleNews
                  .filter((_, i) => i > 8 && i < 15)
                  .map((news) => (
                    <PostEntryBottom news={news} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
