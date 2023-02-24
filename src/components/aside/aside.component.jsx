import { Fragment, useContext, useEffect } from "react";
import { NewsContext } from "../../context/news.context";

import PostEntryBottom from "../posts/post-entry-bottom.component";

import "./aside.style.scss";
import "../posts/posts.style.scss";
import { Link } from "react-router-dom";

const Aside = () => {
  const { finalNews, categories } = useContext(NewsContext);

  const trendingNews = finalNews.filter((news) => {
    return news.tag.some((category) => category.toLowerCase() === "trending");
  });

  const popularNews = finalNews.filter((news) => {
    return news.tag.some((category) => category.toLowerCase() === "popular");
  });

  if (trendingNews.length === 0 || popularNews.length === 0) return;

  return (
    <Fragment>
      <div className="aside-block">
        <ul
          className="nav nav-pills custom-tab-nav mb-4"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-popular-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-popular"
              type="button"
              role="tab"
              aria-controls="pills-popular"
              aria-selected="true"
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-trending-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-trending"
              type="button"
              role="tab"
              aria-controls="pills-trending"
              aria-selected="false"
            >
              Trending
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-latest-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-latest"
              type="button"
              role="tab"
              aria-controls="pills-latest"
              aria-selected="false"
            >
              Latest
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-popular"
            role="tabpanel"
            aria-labelledby="pills-popular-tab"
          >
            {popularNews
              .filter((_, i) => i < 6)
              .map((news) => (
                <PostEntryBottom news={news} />
              ))}
          </div>

          <div
            className="tab-pane fade"
            id="pills-trending"
            role="tabpanel"
            aria-labelledby="pills-trending-tab"
          >
            {trendingNews
              .filter((_, i) => i < 6)
              .map((news) => (
                <PostEntryBottom news={news} />
              ))}
          </div>

          <div
            className="tab-pane fade"
            id="pills-latest"
            role="tabpanel"
            aria-labelledby="pills-latest-tab"
          >
            {finalNews
              .filter((_, i) => i < 6)
              .map((news) => (
                <PostEntryBottom news={news} />
              ))}
          </div>
        </div>
      </div>

      <div className="aside-block">
        <h3 className="aside-title">Categories</h3>
        <ul className="aside-links list-unstyled">
          {categories
            .filetr((_, i) => i < 10)
            .map((category) => {
              return (
                <Link to={`/news/${category}`}>
                  <i className="bi bi-chevron-right"></i> {category}
                </Link>
              );
            })}
        </ul>
      </div>

      <div className="aside-block">
        <h3 className="aside-title">Tags</h3>
        <ul className="aside-tags list-unstyled">
          {categories
            .filetr((_, i) => i < 10)
            .map((category) => {
              return <Link to={`/news/${category}`}>{category}</Link>;
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Aside;
