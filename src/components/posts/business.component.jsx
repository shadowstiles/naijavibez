import { useContext } from "react";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import PostEntryBottom from "./post-entry-bottom.component";

import "./posts.style.scss";

const Business = () => {
  const { finalNews } = useContext(NewsContext);

  // const BusinessNews = finalNews.filter((news) => news.category === "business");

  //This will be deleted on publication
  const BusinessNews = finalNews;

  const { imageurl, heading, published, paragraphbrief, author } =
    BusinessNews[0];

  const {
    imageurl: imageurl2,
    heading: heading2,
    published: published2,
    paragraphbrief: paragraphbrief2,
    author: author2,
  } = BusinessNews[1];

  const {
    imageurl: imageurl3,
    heading: heading3,
    published: published3,
    paragraphbrief: paragraphbrief3,
    author: author3,
  } = BusinessNews[2];

  const {
    heading: heading4,
    published: published4,
    author: author4,
  } = BusinessNews[3];

  return (
    <section className="category-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Business</h2>
          <div>
            <a href="category.html" className="more">
              See All Business
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9 order-md-2">
            <div className="d-lg-flex post-entry-2">
              <a
                href="single-post.html"
                className="me-4 thumbnail d-inline-block mb-4 mb-lg-0"
              >
                <img src={imageurl} alt="" className="img-fluid" />
              </a>
              <div>
                <div className="post-meta">
                  <span className="date">Business</span>{" "}
                  <span className="mx-1">&bullet;</span>{" "}
                  <span>{setDate(published)}</span>
                </div>
                <h3>
                  <a href="single-post.html">{heading}</a>
                </h3>
                <p>{paragraphbrief}</p>
                <div className="d-flex align-items-center author">
                  <div className="name">
                    <h3 className="m-0 p-0">{author}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="post-entry-1 border-bottom">
                  <a href="single-post.html">
                    <img src={imageurl2} alt="" className="img-fluid" />
                  </a>
                  <div className="post-meta">
                    <span className="date">Business</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{setDate(published2)}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href="single-post.html">{heading2}</a>
                  </h2>
                  <span className="author mb-3 d-block">{author2}</span>
                  <p className="mb-4 d-block">{paragraphbrief2}</p>
                </div>

                <div className="post-entry-1">
                  <div className="post-meta">
                    <span className="date">Business</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{setDate(published4)}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href="single-post.html">{heading4}</a>
                  </h2>
                  <span className="author mb-3 d-block">{author4}</span>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="post-entry-1">
                  <a href="single-post.html">
                    <img src={imageurl3} alt="" className="img-fluid" />
                  </a>
                  <div className="post-meta">
                    <span className="date">Business</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{setDate(published3)}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href="single-post.html">{heading3}</a>
                  </h2>
                  <span className="author mb-3 d-block">{author3}</span>
                  <p className="mb-4 d-block">{paragraphbrief3}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {BusinessNews.filter((_, i) => i > 4 && i < 10).map((news) => (
              <PostEntryBottom news={news} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
