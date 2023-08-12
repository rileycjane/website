import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photo";
import Pottery from "./pages/Pottery";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Home />} />{" "}
          <Route path="about" element={<About />} />{" "}
          <Route path="photos" element={<Photos />} />{" "}
          <Route path="pottery" element={<Pottery />} />{" "}
          <Route path="projects" element={<Projects />} />{" "}
          <Route path="*" element={<NoPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );

// root.render(
//   <BrowserRouter>
//     <Home />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
