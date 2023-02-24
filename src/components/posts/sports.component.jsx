import { useContext } from "react";
import { Link } from "react-router-dom";

import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import PostEntryBottom from "./post-entry-bottom.component";

import "./posts.style.scss";

const Sports = () => {
  const { finalNews } = useContext(NewsContext);

  const sportsNews = finalNews.filter((news) => {
    return news.category.some(
      (category) => category.toLowerCase() === "sports"
    );
  });

  if (sportsNews.length < 4) return;

  const {
    imageurl,
    heading,
    author_imageurl,
    published,
    newsid,
    paragraphbrief,
    author,
  } = sportsNews[0];

  const {
    imageurl: imageurl2,
    heading: heading2,
    published: published2,
    newsid: newsid2,
    paragraphbrief: paragraphbrief2,
    author: author2,
  } = sportsNews[1];

  const {
    imageurl: imageurl3,
    heading: heading3,
    published: published3,
    newsid: newsid3,
    paragraphbrief: paragraphbrief3,
    author: author3,
  } = sportsNews[2];

  const {
    heading: heading4,
    newsid: newsid4,
    published: published4,
    author: author4,
  } = sportsNews[3];

  return (
    <section className="category-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Sports</h2>
          <div>
            <a href="category.html" className="more">
              See All Sports
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="d-lg-flex post-entry-2">
              <Link
                to={`news/sports/${newsid}`}
                className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block"
              >
                <img src={imageurl} alt="" className="img-fluid" />
              </Link>
              <div>
                <div className="post-meta">
                  <span className="date">Sports</span>
                  <span className="mx-1">•</span>
                  <span>{setDate(published)}</span>
                </div>
                <h3>
                  <Link to={`news/sports/${newsid}`}>{heading}</Link>
                </h3>
                <p>{paragraphbrief}</p>
                <div className="d-flex align-items-center author">
                  <div className="photo">
                    <img src={author_imageurl} alt="" className="img-fluid" />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">{author}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="post-entry-1 border-bottom">
                  <Link to={`news/sports/${newsid2}`}>
                    <img src={imageurl2} alt="" className="img-fluid" />
                  </Link>
                  <div className="post-meta">
                    <span className="date">Sports</span>
                    <span className="mx-1">•</span>
                    <span>{setDate(published2)}</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to={`news/sports/${newsid2}`}>{heading2}</Link>
                  </h2>
                  <span className="author mb-3 d-block">{author2}</span>
                  <p className="mb-4 d-block">{paragraphbrief2}</p>
                </div>

                <div className="post-entry-1">
                  <div className="post-meta">
                    <span className="date">Sports</span>
                    <span className="mx-1">•</span>
                    <span>{setDate(published4)}</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to={`news/sports/${newsid4}`}>{heading4}</Link>
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
                    <span className="date">Sports</span>
                    <span className="mx-1">•</span>
                    <span>{setDate(published3)}</span>
                  </div>
                  <h2 className="mb-2">
                    <Link to={`news/sports/${newsid3}`}>{heading3}</Link>
                  </h2>
                  <span className="author mb-3 d-block">{author3}</span>
                  <p className="mb-4 d-block">{paragraphbrief3}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            {sportsNews
              .filter((_, i) => i > 4 && i < 10)
              .map((news) => (
                <PostEntryBottom news={news} key={news.newsid} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
