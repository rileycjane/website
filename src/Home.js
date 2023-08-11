import logo from "./logo.svg";
import "./Home.css";
// import FlexTable from "./FlexTable";
import Button from "./Button";
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
      <header className="Home-header">
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        <span class="material-icons">camera_roll</span>
        <span class="material-icons">coffee</span>
        <span class="material-icons">code</span>
        <button class="sidebar-close">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <Sidebar />
        <menu>
          <Button label="pottery" onClick={handlePottery} />
          <Button label="photography" onClick={handlePhoto} />
          <Button label="projects" onClick={handleProject} />
        </menu>
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
