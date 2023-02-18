import { setDate } from "../..";

import "./posts.style.scss";

const PostEntry = ({ news }) => {
  const { imageurl, heading, published, category, newsid } = news;

  return (
    <div className="post-entry-1" key={newsid}>
      <a href="single-post.html">
        <img src={imageurl} alt="" className="img-fluid" />
      </a>
      <div className="post-meta">
        <span className="date">{category}</span>{" "}
        <span className="mx-1">&bullet;</span> <span>{setDate(published)}</span>
      </div>
      <h2>
        <a href="single-post.html">{heading}</a>
      </h2>
    </div>
  );
};

export default PostEntry;
