"use client";
import rightLogo from "@/public/assets/img/right-logo.png";
import { SendIcon } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="lg:px-10 flex flex-col mt-10 mb-25">
      <h2 className="text-center text-4xl font-bold mb-10 md:mb-15">Contact</h2>
      {/* Content Form */}
      <div className="flex items-center justify-center">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold"
        >
          <input
            type="hidden"
            name="access_key"
            value="ca66f410-5601-4ac4-acfd-2482996dc816"
          />
          {/* Left Side */}
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name*"
              className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-cyan-500 py-3"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-cyan-500 py-3"
              placeholder="Your Email*"
              required
            />
          </div>
          {/* Right Side */}
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="company-name"
              id="comany-name"
              className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-cyan-500 py-3"
              placeholder="Company Name*"
              required
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-cyan-500 py-3"
              placeholder="Phone Number*"
              required
            />
          </div>
          {/* Message Area */}
          <div className="md:col-span-2">
            <textarea
              name=""
              id=""
              placeholder="Message*"
              required
              className="w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-cyan-500 py-2 h-24 resize-none"
            ></textarea>
          </div>
          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="mt-6 bg-linear-to-br from-cyan-400 to-cyan-500  text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Send Message <SendIcon className="w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
