import logo from "./logo.svg";
import "./App.css";
// import FlexTable from "./FlexTable";
import Button from "./button";

const App = () => {
  const handleButton = () => {
    console.log("Button clicked uwu");
  };
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button class="sidebar-close">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <sidebar>
          <div class="sidebar-header"></div>
        </sidebar>
      </header>
      <menu>
        <Button label="pottery" onClick={handleButton} />
        <Button label="photography" onClick={handleButton} />
        <Button label="projects" onClick={handleButton} />
      </menu>
    </div>
  );
};

export default App;

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
