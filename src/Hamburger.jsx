import { useState } from "react";
import './Hamburger.css';

const Hamburger = () => {

    //to change burger class
    const[burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const[isMenuClicked, setIsMenuClicked] = useState(false)
    const[menu_class, setMenuClass] = useState("menu hidden")


    //toggle burgermenu change
    const UpdateMenu = () =>{
        if (!isMenuClicked){
            setBurgerClass("burger-bar is clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

return(
    <div style={{width:'100%', height:'100vh'}}>
        <nav>
            <div className="burger-menu" onClick={UpdateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
        </nav>
        <div className={menu_class} >
            <div className="black" ></div>
        </div>

        
    </div>
)


}
export default Hamburger;