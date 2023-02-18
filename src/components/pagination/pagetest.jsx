import { Fragment, useContext, useEffect, useState } from "react";

import { NewsContext } from "../../context/news.context";

import "./pagination.styles.scss";

const Pagination = () => {
  const { getSearchResultsPage, resultsPerPage, pages, results } =
    useContext(NewsContext);

  const curPage = pages;
  const numPages = Math.ceil(results.length / resultsPerPage);

  const addHandlerClick = (e) => {
    const btn = e.target.closest(".btn--inline");
    const showingBtn =
      Array.from(document.querySelectorAll(".btn-showing")).length === 5;

    if (!btn) return;

    const goToPage = +btn.dataset.goto;

    if (showingBtn && goToPage > 5) {
      console.log(curPage, goToPage);
      document
        .querySelector(`.goto${goToPage - 5}`)
        .classList.add("btn-hidden");
      document
        .querySelector(`.goto${goToPage - 5}`)
        .classList.remove("btn-showing");

      document.querySelector(`.goto${goToPage}`).classList.remove("btn-hidden");
      document.querySelector(`.goto${goToPage}`).classList.add("btn-showing");
    }
    if (showingBtn && goToPage < curPage) {
      console.log(curPage, goToPage);
      document
        .querySelector(`.goto${curPage - goToPage}`)
        .classList.remove("btn-hidden");
      document
        .querySelector(`.goto${curPage - goToPage}`)
        .classList.add("btn-showing");

      document.querySelector(`.goto${curPage}`).classList.remove("btn-hidden");
      document.querySelector(`.goto${curPage}`).classList.add("btn-showing");
    }

    document
      .querySelectorAll(".btn--inline")
      .forEach((el) => el.classList.remove("active"));
    document.querySelector(`.goto${goToPage}`).classList.add("active");

    getSearchResultsPage(goToPage);
  };

  // Page 1, and there are other pages
  if (numPages > 1) {
    let pages = [];
    for (let index = 0; index < numPages; index++) {
      pages.push(index + 1);
    }

    return (
      <div className="custom-pagination">
        <button
          data-goto={curPage - 1}
          onClick={addHandlerClick}
          className="btn--inline prev"
        >
          Previous
        </button>
        {curPage > 5 ? "       .       .       .       .       .       " : ""}
        {pages.map((page) => {
          return (
            <button
              className={`${
                page > 5 ? "btn-hidden" : "btn-showing"
              } btn--inline btn-num goto${page} ${page === 1 ? "active" : ""}`}
              key={page}
              data-goto={page}
              onClick={addHandlerClick}
            >
              {page}
            </button>
          );
        })}
        {numPages > 5 && curPage !== numPages
          ? "       .       .       .       .       .       "
          : ""}

        {curPage !== numPages ? (
          <button
            data-goto={curPage + 1}
            onClick={addHandlerClick}
            className="btn--inline next"
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }

  // Page 1, and there are NO other pages
  if (curPage === 1 && numPages === 0) {
    return <Fragment></Fragment>;
  }
};

export default Pagination;
