import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          The project was cooded by Tanya Makarova and is
          <a
            href="https://github.com/makarovatv/reactweatherapp"
            target="_blank"
          >
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
