import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
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
