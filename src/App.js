import logo from "./logo.svg";
import "./App.css";
import FlexTable from "./FlexTable";
import Button from "./button";

const App = () => {
  const handleButton = () => {
    console.log("Button clicked uwu");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="menu">
        <Button label="i'm a button" onClick={handleButton} />
        <Button label="i'm a button" onClick={handleButton} />
        <Button label="i'm a button" onClick={handleButton} />
      </div>
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
