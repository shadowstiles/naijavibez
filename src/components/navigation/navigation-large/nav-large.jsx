import { useEffect, useState, useContext, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { NewsContext } from "../../../context/news.context";
import Footer from "../../footer/footer.component";

import "./nav-large.style.scss";

/*-------------------------------------
      Blur Effects on Nav Links
--------------------------------------*/
const navHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const select = e.target;
    const siblings = select.closest(".nav").querySelectorAll(".nav__link");
    const logo = select.closest(".nav").querySelector(".nav__logo");

    siblings.forEach((el) => {
      if (el !== select) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const LargeScreenNavigation = () => {
  const [nav, setNav] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { loadSearchResults } = useContext(NewsContext);

  const searchHandler = (e) => {
    e.preventDefault();
    const result = e.target.value.toLowerCase();
    setSearchValue(result);
  };

  useEffect(() => {
    loadSearchResults(searchValue);
  }, [searchValue]);

  useEffect(() => setNav(document.querySelector(".nav")), [nav]);

  return (
    <div className="big fixed-top">
      <div
        className="nav"
        onMouseOver={navHover.bind(0.5)}
        onMouseOut={navHover.bind(1)}
      >
        <div className="nav--bigger--screen">
          <div className="logo">
            <Link to="/" className="logo__link nav__logo">
              <i className="design">N</i>aija<i className="design">T</i>rend
            </Link>
          </div>

          <div className="links">
            <ul className="nav--bigger--screen__links nav__links">
              <li className="nav--bigger--screen__item">
                <Link to="/" className="nav--bigger--screen__link nav__link">
                  Blog
                </Link>
              </li>
              <li className="nav--bigger--screen__item">
                <Link
                  to="/about"
                  className="nav--bigger--screen__link nav__link"
                >
                  About
                </Link>
              </li>
              <li className="nav--bigger--screen__item">
                <Link
                  to="/contact"
                  className="nav--bigger--screen__link nav__link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="socials">
            <ul className="social nav__links">
              <li className="social__item">
                <a href="https://www.facebook.com" className="social__link">
                  <span className="bi-facebook nav__link"></span>
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.twitter.com" className="social__link">
                  <span className="bi-twitter nav__link"></span>
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.instagram.com" className="social__link">
                  <span className="bi-instagram nav__link"></span>
                </a>
              </li>
              <li className="social__item">
                <form onSubmit={searchHandler} className="search">
                  <input
                    type="text"
                    className="search__input"
                    onChange={searchHandler}
                    value={searchValue}
                    placeholder="Search News Here..."
                  />
                  <button className="search__button">
                    <span className="bi-search"></span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Fragment>
        <main id="main">
          <Outlet />
        </main>
      </Fragment>
      <Fragment>
        <Footer />
        <Link
          to={"/"}
          class="scroll-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </Link>
      </Fragment>
    </div>
  );
};

export default LargeScreenNavigation;
