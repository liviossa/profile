import { React, Components } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import Content from "./Components/content";

function App() {
  return (
    <div className="appBody">
      <Header />

      <Content />
    </div>
  );
}
export default App;
