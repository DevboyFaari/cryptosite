import { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  //to change burger class
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menu_class, setMenuClass] = useState("_menu");
  const [close, setClose] = useState(true);

  //toggle burgermenu change
  const UpdateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar is clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("unmenu ");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={UpdateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className="black">
          <div className="side">
            <img
              src="./cryptozen.png"
              alt="12"
              className="tt pl-1 mt-6 ml-9 "
            />
            <div onClick={UpdateMenu}>
              <h1 className="x">X</h1>
            </div>
          </div>
          <div className={isMenuClicked ? "move" : ""}>
            <p className="textcolor">
              They argument in placerat vitae lacus ut scelerisque. Fusce luctus
              odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio
              data center.
            </p>
            <div className="location-container">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p className="textcol">
                13/A Dropical center Rs <br />
                london WC1B 4EA{" "}
              </p>
            </div>
            <div className="phone">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <p className="textcol">+8 91230 456 788</p>
            </div>
            <div class="location-title">
              <h2>Open Hours</h2>
            </div>
            <div class="location-content-text">
              <p>
                Mon-Sat: 8 am-5 pm <br />
                Sunday Closed
              </p>
            </div>
            <div className="button-container">
              <li>
                <a href="facebook.com" class="round-button">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="instagram.com" class="round-button">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="twitter.com" class="round-button">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="snapchat.com" class="round-button">
                  <i class="fa fa-snapchat" aria-hidden="true"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hamburger;
