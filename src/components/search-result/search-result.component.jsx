import { useContext } from "react";
import { Helmet } from "react-helmet";
import { setDate } from "../..";
import { NewsContext } from "../../context/news.context";
import Aside from "../aside/aside.component";
import Pagination from "../pagination/pagination.component";

import "../pagination/pagination.styles.scss";
import "../posts/posts.style.scss";

const SearchResult = () => {
  const { nextPage, query } = useContext(NewsContext);

  if (nextPage === 0)
    return <h2 className="category-title">No Search Results</h2>;

  return (
    <section id="search-result" className="search-result">
      <Helmet>
        <title>Search | {query}</title>
        <meta name="description" content={`Search result for "${query}"`} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h3 className="category-title">Search Results</h3>

            {nextPage.map((news) => {
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
                <div className="d-md-flex post-entry-2 small-img" key={newsid}>
                  <a href="single-post.html" className="me-4 thumbnail">
                    <img src={imageurl} alt="" className="img-fluid" />
                  </a>
                  <div>
                    <div className="post-meta">
                      <span className="date">{category}</span>{" "}
                      <span className="mx-1">&bullet;</span>{" "}
                      <span>{setDate(published)}</span>
                    </div>
                    <h3>
                      <a href="single-post.html">{heading}</a>
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

export default SearchResult;
