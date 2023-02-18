import { Fragment, useContext } from "react";

import { NewsContext } from "../../context/news.context";

import MyArrows from "../assets/icons.svg";

import "./pagination.styles.scss";

const Pagination = () => {
  const { getSearchResultsPage, resultsPerPage, pages, results } =
    useContext(NewsContext);

  const addHandlerClick = (e) => {
    const btn = e.target.closest(".btn--inline");
    if (!btn) return;

    const goToPage = +btn.dataset.goto;

    getSearchResultsPage(goToPage);
  };

  const curPage = pages;
  const numPages = Math.ceil(results.length / resultsPerPage);

  // Page 1, and there are other pages
  if (curPage === 1 && numPages > 1)
    return (
      <div className="pagination" onClick={addHandlerClick}>
        <button
          data-goto={curPage + 1}
          className="btn--inline pagination__btn--next"
        >
          <span>Page {curPage + 1}</span>
          <svg className="search__icon">
            <use href={`${MyArrows}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    );

  // Last page
  if (curPage === numPages && numPages > 1) {
    return (
      <div className="pagination" onClick={addHandlerClick}>
        <button
          data-goto={curPage - 1}
          className="btn--inline pagination__btn--prev"
        >
          <svg className="search__icon">
            <use href={`${MyArrows}#icon-arrow-left`}></use>
          </svg>
          <span>Page {curPage - 1}</span>
        </button>
      </div>
    );
  }

  // Other page
  if (curPage < numPages) {
    return (
      <div className="pagination" onClick={addHandlerClick}>
        <button
          data-goto={curPage - 1}
          className="btn--inline pagination__btn--prev"
        >
          <svg className="search__icon">
            <use href={`${MyArrows}#icon-arrow-left`}></use>
          </svg>
          <span>Page {curPage - 1}</span>
        </button>
        <button
          data-goto={curPage + 1}
          className="btn--inline pagination__btn--next"
        >
          <span>Page {curPage + 1}</span>
          <svg className="search__icon">
            <use href={`${MyArrows}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    );
  }

  // Page 1, and there are NO other pages
  if (curPage === 1 && numPages === 0) {
    return <Fragment></Fragment>;
  }
};

export default Pagination;
