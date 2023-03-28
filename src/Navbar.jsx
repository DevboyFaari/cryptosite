import Hamburger from "./Hamburger";
import "./Navbar.css";

const NavbarItem = ({ text, href }) => {
  return (
    <a href={href} className="hover:text-blue-600 transition duration-900">
      {text}
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="flex py-5 px-5 leading-6 container">
      <img src="./cryptozen.png" alt="12" className="tt pl-5 ml-[90px]" />
      <div className="flex flex-1 text-white leading-6 justify-center gap-[50px] items-center  ml-12 mr-42 font-bold text-center ">
        <NavbarItem text={"Demo"} href={"demo"} />
        <NavbarItem text={"About"} href={"about"} />
        <NavbarItem text={"Page"} href={"page"} />
        <NavbarItem text={"Road"} href={"road"} />
        <NavbarItem text={"Contact"} href={"contact"} />
      </div>
    </div>
  );
};

export default Navbar;
