import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5"> Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
      </div>
    </div>
  );
}

export default App;
