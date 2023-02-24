import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import Aside from "../aside/aside.component";

import "../posts/posts.style.scss";

const SinglePost = () => {
  const { newsid } = useParams();
  const { finalNews } = useContext(NewsContext);

  const news = finalNews.filter((news) => news.newsid === newsid);

  if (news.length === 0) return;

  const {
    category,
    heading,
    published,
    imageurl,
    paragraphs,
    paragrahbrief,
    keywords,
  } = news[0];

  console.log(keywords);

  return (
    <section className="single-post-content">
      <Helmet>
        <title>{heading}</title>
        <meta name="description" content={paragrahbrief} />
        <meta name="keywords" content={keywords.join(" , ")} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-9 post-content" data-aos="fade-up">
            <div className="single-post">
              <div className="post-meta">
                <span className="date">{category}</span>
                <span className="mx-1">•</span>{" "}
                <span>{setDate(published)}</span>
              </div>
              <h1 className="mb-5">{heading}</h1>
              <p>
                <span className="firstcharacter">{paragraphs[0][0]}</span>
                {paragraphs[0]}
              </p>

              <figure className="my-4">
                <img src={imageurl} alt="" className="img-fluid" />
                <figcaption>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, odit?
                </figcaption>
              </figure>
              {paragraphs
                .filter((_, i) => i > 0)
                .map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
            </div>
          </div>
          <div className="col-md-3">
            <Aside />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
