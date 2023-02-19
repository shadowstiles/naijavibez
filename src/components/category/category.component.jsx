import { useContext } from "react";
import { Link } from "react-router-dom";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import Aside from "../aside/aside.component";
import Pagination from "../pagination/pagination.component";

import "../posts/posts.style.scss";

const Category = (mainCategory) => {
  const { finalNews } = useContext(NewsContext);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-9" data-aos="fade-up">
            <h3 className="category-title">Category: {mainCategory}</h3>

            {finalNews
              .filter((_, i) => i < 10)
              .map((news) => {
                const {
                  imageurl,
                  category,
                  published,
                  paragraphbrief,
                  author,
                  author_imageurl,
                  heading,
                  newsid,
                } = news;

                return (
                  <div className="d-md-flex post-entry-2 half" key={newsid}>
                    <Link
                      to={`news/category/${category}/${heading}`}
                      className="me-4 thumbnail"
                    >
                      <img src={imageurl} alt="" className="img-fluid" />
                    </Link>

                    <div>
                      <div className="post-meta">
                        <span className="date">{category[0]}</span>
                        <span className="mx-1">•</span>
                        <span>{setDate(published)}</span>
                      </div>
                      <h3>
                        <Link to={`news/category/${category}/${heading}`}>
                          {heading}
                        </Link>
                      </h3>
                      <p>{paragraphbrief}</p>
                      <div className="d-flex align-items-center author">
                        <div className="photo">
                          <img
                            src={author_imageurl}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="name">
                          <h3 className="m-0 p-0">{author}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className="text-start py-4">
              <Pagination />
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

export default Category;
