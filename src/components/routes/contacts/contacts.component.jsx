import "./contacts.style.scss";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="contact-title">
        <h1 className="title">Contact us</h1>
      </div>

      <div className="contact__details">
        <div className="info-item">
          <div className="contact__icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <h3>Address</h3>
          <address>16 Victory Estate, Banana Island, Nigeria</address>
        </div>

        <div className="info-item medi">
          <div className="contact__icon">
            <i className="bi bi-phone"></i>
          </div>
          <h3>Phone Number</h3>
          <p>
            <a href="tel:+2347035532540">+234 703 553 2540</a>
          </p>
        </div>

        <div className="info-item">
          <div className="contact__icon">
            <i className="bi bi-envelope"></i>
          </div>
          <h3>Email</h3>
          <p>
            <a href="mailto:curtisazizacurtis@gmail.com">curtisazizacurtis@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="form">
        <form>
          <div className="form__group">
            <input
              type="text"
              name="name"
              className="form__control"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              className="form__control"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form__group">
            <input
              type="text"
              className="form__control"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>

          <div className="form__group">
            <textarea
              className="form__control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button className="form__button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
