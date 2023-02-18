import { useContext } from "react";
import { NewsContext } from "../../context/news.context";

import "./posts.style.scss";

const Trending = () => {
  const { finalNews } = useContext(NewsContext);

  return (
    <div className="col-lg-4">
      <div className="trending">
        <h3>Trending</h3>
        <ul className="trending-post">
          {finalNews
            .filter((_, i) => i < 6)
            .map((news) => {
              const { heading, author } = news;

              return (
                <li>
                  <a href="single-post.html">
                    <span className="number">1</span>
                    <h3>{heading}</h3>
                    <span className="author">{author}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Trending;
