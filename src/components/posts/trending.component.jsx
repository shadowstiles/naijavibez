import { useContext } from "react";
import { Link } from "react-router-dom";
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
              const { heading, author, newsid, category } = news;

              return (
                <li key={newsid}>
                  <Link to={`news/category/${category}/${heading}`}>
                    <span className="number">1</span>
                    <h3>{heading}</h3>
                    <span className="author">{author}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Trending;
