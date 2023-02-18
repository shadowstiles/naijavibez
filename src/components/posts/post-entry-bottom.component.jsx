import { setDate } from "../..";

import "./posts.style.scss";

const PostEntryBottom = ({ news }) => {
  const { author, heading, published, category } = news;

  return (
    <div className="post-entry-1 border-bottom">
      <div className="post-meta">
        <span className="date">{category}</span>{" "}
        <span className="mx-1">&bullet;</span> <span>{setDate(published)}</span>
      </div>
      <h2 className="mb-2">
        <a href="single-post.html">{heading}</a>
      </h2>
      <span className="author mb-3 d-block">{author}</span>
    </div>
  );
};

export default PostEntryBottom;
