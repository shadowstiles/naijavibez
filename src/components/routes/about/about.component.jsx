import { useContext } from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { NewsContext } from "../../../context/news.context";

import "../../posts/posts.style.scss";

const About = () => {
  const { finalNews } = useContext(NewsContext);
  const { paragraphbrief } = finalNews[0];

  return (
    <Fragment>
      <Helmet>
        <title>NaijaVibez | About</title>
        <meta name="description" content="About Naijavibez and its creators" />
      </Helmet>
      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 className="page-title">About us</h1>
            </div>
          </div>

          <div className="row mb-5">
            <div className="d-md-flex post-entry-2 half">
              <a href="#" className="me-4 thumbnail">
                <img
                  src="../../assets/post-landscape-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="ps-md-5 mt-4 mt-md-0">
                <div className="post-meta mt-4">About us</div>
                <h2 className="mb-4 display-4">Company History</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                  itaque rerum vitae, necessitatibus nulla animi expedita cumque
                  provident inventore? Voluptatum in tempora earum deleniti,
                  culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
                <p>
                  Fugit eaque illum blanditiis, quo exercitationem maiores autem
                  laudantium unde excepturi dolores quasi eos vero harum ipsa
                  quam laborum illo aut facere voluptates aliquam adipisci
                  sapiente beatae ullam. Tempora culpa iusto illum accusantium
                  cum hic quisquam dolor placeat officiis eligendi.
                </p>
              </div>
            </div>

            <div className="d-md-flex post-entry-2 half mt-5">
              <a href="#" className="me-4 thumbnail order-2">
                <img
                  src="../../assets/post-landscape-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="pe-md-5 mt-4 mt-md-0">
                <div className="post-meta mt-4">Mission &amp; Vision</div>
                <h2 className="mb-4 display-4">Mission &amp; Vision</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                  itaque rerum vitae, necessitatibus nulla animi expedita cumque
                  provident inventore? Voluptatum in tempora earum deleniti,
                  culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
                <p>
                  Fugit eaque illum blanditiis, quo exercitationem maiores autem
                  laudantium unde excepturi dolores quasi eos vero harum ipsa
                  quam laborum illo aut facere voluptates aliquam adipisci
                  sapiente beatae ullam. Tempora culpa iusto illum accusantium
                  cum hic quisquam dolor placeat officiis eligendi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 bg-light py-5">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-between align-items-lg-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="display-4 mb-4">Latest News</h2>
              <p>{paragraphbrief}</p>
              <p>
                <a href="#" className="more">
                  View All Blog Posts
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <img
                    src="../../assets/post-portrait-3.jpg"
                    alt=""
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src="../../assets/post-portrait-4.jpg"
                    alt=""
                    className="img-fluid mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h2 className="display-4">Our Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil sint sed, fugit distinctio ad eius itaque deserunt
                    doloribus harum excepturi laudantium sit officiis et eaque
                    blanditiis. Dolore natus excepturi recusandae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-1.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Cameron Williamson</h4>
              <span className="d-block mb-3 text-uppercase">
                Founder &amp; CEO
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-2.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Wade Warren</h4>
              <span className="d-block mb-3 text-uppercase">Founder, VP</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-3.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Jane Cooper</h4>
              <span className="d-block mb-3 text-uppercase">Editor Staff</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-4.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Cameron Williamson</h4>
              <span className="d-block mb-3 text-uppercase">Editor Staff</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-5.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Cameron Williamson</h4>
              <span className="d-block mb-3 text-uppercase">Editor Staff</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
            <div className="col-lg-4 text-center mb-5">
              <img
                src="../../assets/person-6.jpg"
                alt=""
                className="img-fluid rounded-circle w-50 mb-4"
              />
              <h4>Cameron Williamson</h4>
              <span className="d-block mb-3 text-uppercase">Editor Staff</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                itaque rerum vitae, necessitatibus nulla animi expedita cumque
                provident inventore? Voluptatum in tempora earum deleniti, culpa
                odit veniam, ea reiciendis sunt ullam temporibus aut!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
