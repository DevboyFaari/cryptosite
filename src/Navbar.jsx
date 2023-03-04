import Hamburger from './Hamburger';
import './Navbar.css';


  const Navbar = () => {
    return (
      <div className="py-5 px-5 leading-6 container">
        <img src="./cryptozen.png" alt="12" className="tt pl-5" />
        <div className="flex text-white leading-6 justify-end  ml-12 mr-42 font-bold text-center ">
          <a href="demo" className="hover:text-blue-600 transition duration-1500">
            Demo
          </a>
          <a href="about"   className="hover:text-blue-600 transition duration-900" >About</a>
          <a href="pages"  className ="hover:text-blue-600 transition duration-900">Pages</a>
          <a href="roadmap"  className="hover:text-blue-600 transition duration-900">Road Map</a>
          <a href="contact"  className="hover:text-blue-600 transition duration-900">Contact</a>
        </div>
        

      </div>
    );
  }
  export default Navbar;