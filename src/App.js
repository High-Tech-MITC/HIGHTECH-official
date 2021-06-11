import Header from "./components/Header";
import Teams from "./components/Teams";
import "./App.css";
import "./components/styles/tailwind.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Teams />
    </div>
  );
};

export default App;
