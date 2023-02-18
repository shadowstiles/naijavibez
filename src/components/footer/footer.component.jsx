import { useContext } from "react";
import { NewsContext } from "../../context/news.context";
import FooterNews from "./footer-news.component";

import "./footer.style.scss";

const Footer = () => {
  const { finalNews } = useContext(NewsContext);
  use;

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <h3 className="footer-heading">About NaijaTrend</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ab, perspiciatis beatae autem deleniti voluptate nulla a
                dolores, exercitationem eveniet libero laudantium recusandae
                officiis qui aliquid blanditiis omnis quae. Explicabo?
              </p>
              <p>
                <a href="about.html" className="footer-link-more">
                  Learn More
                </a>
              </p>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="index.html">
                    <i className="bi bi-chevron-right"></i> Home
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="bi bi-chevron-right"></i> Blog
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Categories
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <i className="bi bi-chevron-right"></i> About us
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <i className="bi bi-chevron-right"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="footer-heading">Categories</h3>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Business
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Education
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Sports
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Food
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Politics
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Celebrity
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Startups
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="bi bi-chevron-right"></i> Travel
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h3 className="footer-heading">Recent Posts</h3>

              <ul className="footer-links footer-blog-entry list-unstyled">
                {finalNews
                  .filter((_, i) => i < 4)
                  .map((news) => (
                    <FooterNews news={news} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>NaijaTrend</span>
                </strong>
                . All Rights Reserved
              </div>
            </div>

            <div className="col-md-6">
              <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="tictok">
                  <i className="bi bi-tictok"></i>
                </a>
                <a href="#" className="whatsapp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;