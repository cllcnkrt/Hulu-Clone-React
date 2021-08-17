import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="app">
      <Header />

      <Nav />
      <Result/>
    </div>
  );
}

export default App;
