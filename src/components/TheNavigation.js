import Navbar from "react-bootstrap/Navbar"
import {List} from "react-bootstrap-icons"
import {HouseDoorFill} from "react-bootstrap-icons"
import {Star} from "react-bootstrap-icons"
import {BookmarkStar} from "react-bootstrap-icons"
import {Cursor} from "react-bootstrap-icons"
import {Trash} from "react-bootstrap-icons"
import {Clock} from "react-bootstrap-icons"
import {Gear} from "react-bootstrap-icons"
import {Person} from "react-bootstrap-icons"
import {FileCheck} from "react-bootstrap-icons"
import {useState} from "react";

const TheNavigation = () => {
const { Brand } = Navbar;
const [status,,] = useState(true)
const toggle = (e) => {
  e.preventDefault()
  let elements = document.getElementsByClassName('option-text');
  // if (status) {
  //  const answer = elements.map((el) => {
  //     el.style.display = 'none';
  //     setStatus(!status)
  //   })}
  //   else {
  //     const answer = elements.map((el) => {
  //       el.style.display = 'inline';
  //       setStatus(!status)
  //     })
  //   }
  console.log(status, elements)
  }
  return (
<nav className="navbar">
  <ul>
  <Brand><button className="dropbtn" onClick={toggle}>
      <List />
    </button>
  </Brand>
  <li className="dropdown">
    <button className="dropbtn">
      <HouseDoorFill />
      <span className="option-text">Home</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Star />
      <span className="option-text">Favourites</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <BookmarkStar />
      <span className="option-text">Bookmarks</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Cursor />
      <span className="option-text">Send Items</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Trash />
      <span className="option-text">Trash</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Clock />
      <span className="option-text">Countdown</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Gear />
      <span className="option-text">Settings</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <Person />
      <span className="option-text">Profile</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>

    <li className="dropdown">
    <button className="dropbtn">
      <FileCheck />
      <span className="option-text">Check files</span>
    </button>
    <div className="dropdown-content">
      <a href="https://facebook.com">Link 1</a>
      <a href="https://facebook.com">Link 2</a>
      <a href="https://facebook.com">Link 3</a>
    </div>
    </li>
  </ul> 
</nav>
  )
}

export default TheNavigation;