import { Link } from "react-router-dom";
import { setDate } from "../..";

import "./footer.style.scss";

const FooterNews = ({ news }) => {
  const { imageurl, category, published, heading, newsid } = news;

  return (
    <li>
      <Link
        to={`news/${category[0]}/${newsid}`}
        className="d-flex align-items-center"
      >
        <img src={imageurl} alt="" className="img-fluid me-3" />
        <div>
          <div className="post-meta d-block">
            <span className="date">{category}</span>{" "}
            <span className="mx-1">&bullet;</span>{" "}
            <span>{setDate(published)}</span>
          </div>
          <span>{heading}</span>
        </div>
      </Link>
    </li>
  );
};

export default FooterNews;
