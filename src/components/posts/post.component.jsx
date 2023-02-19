import { useContext } from "react";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";

import PostEntry from "./post-entry.component";
import Trending from "./trending.component";

import "./posts.style.scss";
import { Link } from "react-router-dom";

const Post = () => {
  const { finalNews } = useContext(NewsContext);

  const { category, published, heading, paragrahpbrief, author, imageurl } =
    finalNews[0];

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="post-entry-1 lg">
              <Link to={`news/category/${category}/${heading}`}>
                <img src={imageurl} alt="" className="img-fluid" />
              </Link>

              <div className="post-meta">
                <span className="date">{category}</span>
                <span className="mx-1">•</span>
                <span>{setDate(published)}</span>
              </div>
              <h2>
                <Link to={`news/category/${category}/${heading}`}>
                  {heading}
                </Link>
              </h2>
              <p className="mb-4 d-block">{paragrahpbrief}</p>

              <div className="d-flex align-items-center author">
                <div className="name">
                  <h3 className="m-0 p-0">{author}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {finalNews
                  .filter((_, i) => i > 0 && i < 4)
                  .map((news) => (
                    <PostEntry news={news} key={news.newsid} />
                  ))}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {finalNews
                  .filter((_, i) => i > 3 && i < 7)
                  .map((news) => (
                    <PostEntry news={news} key={news.newsid} />
                  ))}
              </div>

              <Trending />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
