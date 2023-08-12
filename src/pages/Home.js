import logo from "../logo.svg";
import "./Home.css";
// import { Link } from "react-router-dom;
// import FlexTable from "./FlexTable";
import IconButton from "../button";
// import Sidebar from "../Sidebar";
import About from "./About";

const Home = () => {
  return (
    <div className="Home">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <header className="Home-header">
        <h1>riley coad</h1>
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        {/* <button class="sidebar-close">
          <span class="material-symbols-outlined">menu</span>
        </button> */}
        <menu>
          <IconButton
            label="projects"
            style="menu-button"
            icon="code"
            onClick="/projects"
          />
          <IconButton
            label="photography"
            style="menu-button"
            icon="camera_roll"
            onClick="/photos"
          />
          <IconButton
            label="pottery"
            style="menu-button"
            icon="coffee"
            onClick="/pottery"
          />
        </menu>
        <IconButton
          label="about me!"
          style="more-button"
          icon="expand_more"
          onClick="/about"
        />
      </header>
    </div>
  );
};

export default Home;

/* <h1>Flex Table Example</h1>
<FlexTable /> */

/* /* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>; */
