import "../assets/TheNavigation.scss";
import Navbar from "react-bootstrap/Navbar";
import {
  BoxArrowRight,
  HouseDoorFill,
  Star,
  BookmarkStar,
  Cursor,
  Trash,
  ShieldFillCheck,
  Clock,
  Gear,
  Person,
} from "react-bootstrap-icons";
import { useState } from "react";

const TheNavigation = () => {
  const { Brand } = Navbar;
  const [status, setStatus] = useState(true);
  const toggle = (e) => {
    e.preventDefault();
    let elements = document.getElementsByClassName("option-text");
    let toolTip = document.getElementsByClassName("dropdown-content");
    let width = window.screen.availWidth;

    if (status && width > 576) {
      for (let i = 0; i < elements.length; i++) {
        toolTip[i].style.visibility = "hidden";
        elements[i].style.display = "inline";
      }
      setStatus(!status);
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        toolTip[i].style.visibility = "visible";
      }
      setStatus(!status);
    }
  };
  return (
    <nav className="navbar">
      <div className="the-nav">
        <ul>
          <Brand>
            <button className="dropbtn" onClick={toggle}>
              <ShieldFillCheck />
            </button>
          </Brand>
          <li className="dropdown">
            <button className="dropbtn">
              <HouseDoorFill />
              <span className="option-text">Home</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Home</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Star />
              <span className="option-text">Favourites</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Favourites</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <BookmarkStar />
              <span className="option-text">Bookmarks</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Bookmarks</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Cursor />
              <span className="option-text">Sent Items</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Sent Items</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Trash />
              <span className="option-text">Trash</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Trash</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Clock />
              <span className="option-text">Countdown</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Countdown</a>
            </div>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="dropdown">
            <button className="dropbtn">
              <Gear />
              <span className="option-text">Settings</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Settings</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <Person />
              <span className="option-text">Profile</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Profile</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">
              <BoxArrowRight />
              <span className="option-text">Check Files</span>
            </button>
            <div className="dropdown-content">
              <a href="/">Check Files</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TheNavigation;
