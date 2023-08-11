import logo from "./logo.svg";
import "./Home.css";
// import FlexTable from "./FlexTable";
import IconButton from "./button";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  const handlePottery = () => {
    console.log("Button clicked uwu");
  };
  const handlePhoto = () => {
    return (
      <li>
        <Link to="/pottery"></Link>
      </li>
    );
  };
  const handleProject = () => {
    return (
      <li>
        <Link to="/projects"></Link>
      </li>
    );
  };
  const moreInfo = () => {
    return console.log("more info!");
  };
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
            onClick={handleProject}
          />
          <IconButton
            label="photography"
            style="menu-button"
            icon="camera_roll"
            onClick={handlePhoto}
          />
          <IconButton
            label="pottery"
            style="menu-button"
            icon="coffee"
            onClick={handlePottery}
          />
        </menu>
        <IconButton
          label="about me!"
          style="more-button"
          icon="expand_more"
          onClick={moreInfo}
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
