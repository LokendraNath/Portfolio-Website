import rightLogo from "../assets/img/right-logo.png";

const Contact = () => {
  return (
    <section
      className="contact min-h-screen flex items-center justify-center flex-col px-[12%] w-full lg:pt-20 lg:mb-20"
      id="contact"
    >
      <div className="contact-left-title">
        <h2 className="section-title">Contact Us</h2>
      </div>

      <div className="contact-container gap-30 flex lg:mt-20 lg:mt-5 items-center justify-center">
        <div className="contact-right hidden lg:block">
          <img src={rightLogo} alt="" className="w-80" />
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-left flex flex-col items-start gap-5"
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
            className="contactInput"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contactInput"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="h-36 w-full pt-3.5 pl-6 font-medium text-lg rounded-xl bg-gradient-to-r from-[rgba(0,157,255,0.2)] to-[rgba(255,0,255,0.2)] outline-none focus:border focus:border-[#8383ff]"
          ></textarea>
          <button
            type="submit"
            className="self-center py-2 text-white font-bold tracking-widest px-8 text-lg rounded-xl cursor-pointer bg-gradient-to-r to-[#027cc9cc] from-[#b300b3cc]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
