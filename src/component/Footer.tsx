const Footer = () => {
  return (
    <footer className=" w-full h-20 flex items-center justify-center flex-col gap-4">
      <ul className="flex gap-10">
        <li>
          <a href="#about" className="font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="#skill" className="font-semibold">
            Skills
          </a>
        </li>
        <li>
          <a href="#project" className="font-semibold">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="font-semibold">
            Contact
          </a>
        </li>
      </ul>
      <p className="font-light mt-3 text-stone-800 tracking-widest text-sm mb-10">
        &#169; All Right Reserved | Lokendra Nath
      </p>
    </footer>
  );
};
export default Footer;
