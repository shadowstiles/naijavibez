import { Link } from "react-router-dom";
import { setDate } from "../..";

import "./posts.style.scss";

const PostEntry = ({ news }) => {
  const { imageurl, heading, published, category, newsid } = news;

  return (
    <div className="post-entry-1" key={newsid}>
      <Link to={`news/${category}/${newsid}`}>
        <img src={imageurl} alt="" className="img-fluid" />
      </Link>

      <div className="post-meta">
        <span className="date">{category}</span>
        <span className="mx-1">•</span> <span>{setDate(published)}</span>
      </div>
      <h2>
        <Link to={`news/${category}/${newsid}`}>{heading}</Link>
      </h2>
    </div>
  );
};

export default PostEntry;
