import { useState } from "react";

const Navbar = (props) =>{
    const [nav_item_class,set_nav_item_class] = useState("nav-hidden");
    const [navBurgerBar,setNavBurgerBar] = useState("nav-burger-bar-dark");
    const [navBurgerClass,setNavBurgerClass] = useState("");
    const handleBurgerClicked = () => {
        if (nav_item_class==="nav-hidden"){
            set_nav_item_class("nav-shown");
            setNavBurgerBar("nav-burger-bar");
            setNavBurgerClass("nav-burger-cross");
        }
        else{ 
            set_nav_item_class("nav-hidden");
            setNavBurgerBar("nav-burger-bar-dark");
            setNavBurgerClass("");
        }
    }
    const handleNavigationChange = (selectedNav) => {
        props.onNavigationChanged(selectedNav);
        handleBurgerClicked();
    }
    return(
        <div className="navbar">
            <div id="nav-burger" className={navBurgerClass} onClick ={handleBurgerClicked}>
                <div id="b1" className={navBurgerBar} ></div>
                <div id="b2" className={navBurgerBar}></div>
                <div id="b3" className={navBurgerBar}></div>
            </div>
            <div className={`nav-items ${nav_item_class}`} >
                <div className={(props.current==="home") ? "nav-item current" : "nav-item"} id="nav-home" onClick = {()=>{handleNavigationChange("home")}} >Home</div>
                <div className={(props.current==="my_projects") ? "nav-item current" : "nav-item"} id="nav-projects" onClick = {()=>{handleNavigationChange("my_projects")}}>My Projects</div>
                <div className={(props.current==="about") ? "nav-item current" : "nav-item"} id="nav-about" onClick = {()=>{handleNavigationChange("about")}}>About</div>
                <div className={(props.current==="contacts") ? "nav-item current" : "nav-item"} id="nav-contacts" onClick = {()=>{handleNavigationChange("contacts")}}>Contacts</div>
            </div>
        </div>
    );
}
export default Navbar;