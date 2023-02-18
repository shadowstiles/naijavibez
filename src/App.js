import { Fragment, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import SmallScreenNavigation from "./components/navigation/navigation-small/nav-small.component";
import LargeScreenNavigation from "./components/navigation/navigation-large/nav-large";
import About from "./components/routes/about/about.component";
import Contact from "./components/routes/contacts/contacts.component";
import { NewsContext } from "./context/news.context";
import Spinner from "./components/spinner/spinner.component";
import Slide from "./components/swiper/swiper.component";
import Post from "./components/posts/post.component";
import Sports from "./components/posts/sports.component";
import Business from "./components/posts/business.component";
import Lifestyle from "./components/posts/lifestyle.component";
import SinglePost from "./components/single-post/single-post.component";
import SearchResult from "./components/search-result/search-result.component";
import Category from "./components/category/category.component";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const App = () => {
  const { submit } = useContext(NewsContext);
  const isMobile = useMediaQuery("(max-width: 50em)");

  useEffect(() => {
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      window.addEventListener("load", togglescrollTop);
      document.addEventListener("scroll", togglescrollTop);
      scrollTop.addEventListener(
        "click",
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          isMobile ? <SmallScreenNavigation /> : <LargeScreenNavigation />
        }
      >
        <Route
          index
          element={
            submit ? (
              <Spinner />
            ) : (
              <Fragment>
                <Slide />
                <Post />
                <Sports />
                <Business />
                <Lifestyle />
              </Fragment>
            )
          }
        />
        <Route path="about" element={<About />} />
        <Route path="news" element={<SinglePost />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="category" element={<Category />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
