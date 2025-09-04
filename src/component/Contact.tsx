const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-left-title">
        <h2 className="section-title">Contact Us</h2>
      </div>
      <div className="contact-container">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-left"
        >
          <input
            type="hidden"
            name="access_key"
            value="ca66f410-5601-4ac4-acfd-2482996dc816"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-input"
          ></textarea>
          <button type="submit">
            Submit <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div className="contact-right">
          <img src="img/right-logo.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
