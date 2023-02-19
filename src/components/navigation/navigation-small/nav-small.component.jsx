import { useState, useEffect, useContext, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { NewsContext } from "../../../context/news.context";

import "./nav-small.style.scss";
import "../../bootstrap-icons/bootstrap-icons.css";
import Footer from "../../footer/footer.component";

const SmallScreenNavigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const { loadSearchResults } = useContext(NewsContext);
  const [checkValue, setCheckValue] = useState(false);
  const [background, setBackground] = useState(null);
  const [nav, setNav] = useState(null);

  const toggleMenu = () => {
    if (!nav && !background) return;

    if (!checkValue) {
      background.style.transform = "scale(100)";
      nav.style.opacity = 1;
      nav.style.width = "100%";
    }

    if (checkValue) {
      background.style.transform = "none";
      nav.style.opacity = 0;
      nav.style.width = 0;
    }

    setCheckValue(!checkValue);
  };

  const checkBoxHandler = () => {
    toggleMenu();
  };

  const onClickHandler = () => {
    toggleMenu();
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const result = e.target.value.toLowerCase();
    setSearchValue(result);
  };

  useEffect(() => {
    loadSearchResults(searchValue);
  }, [searchValue]);

  useEffect(() => setNav(document.querySelector(".navigation__nav")), [nav]);
  useEffect(
    () => setBackground(document.querySelector(".navigation__background")),
    [background]
  );

  return (
    <div className="small">
      <div className="nav">
        <div className="nav--smaller--screen">
          <h2 className="logo">
            <Link to="/">
              <i className="design">N</i>aija<i className="design">T</i>rend
            </Link>
          </h2>

          <form onSubmit={searchHandler} className="search">
            <input
              type="search"
              className="search__input"
              onChange={searchHandler}
              value={searchValue}
              placeholder="Search News Here.."
            />
            <button className="search__button">
              <span className="bi-search"></span>
            </button>
          </form>

          <div className="navigation ">
            <input
              type="checkbox"
              className="navigation__checkbox"
              onChange={checkBoxHandler}
              checked={checkValue}
              id="navi-toggle"
            />
            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item" onClick={onClickHandler}>
                  <Link to="/" className="navigation__link">
                    <span>01</span>Blog
                  </Link>
                </li>
                <li className="navigation__item" onClick={onClickHandler}>
                  <Link to="/about" className="navigation__link">
                    <span>02</span>About
                  </Link>
                </li>
                <li className="navigation__item" onClick={onClickHandler}>
                  <Link to="/contact" className="navigation__link">
                    <span>03</span>Contact
                  </Link>
                </li>
              </ul>

              <ul className="navigation__social">
                <li className="social__item">
                  <a href="https://www.facebook.com" className="social__link">
                    <span className="bi-facebook"></span>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://www.twitter.com" className="social__link">
                    <span className="bi-twitter"></span>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://www.instagram.com" className="social__link">
                    <span className="bi-instagram"></span>
                  </a>
                </li>
              </ul>
            </nav>
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
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      </Fragment>
    </div>
  );
};

export default SmallScreenNavigation;
