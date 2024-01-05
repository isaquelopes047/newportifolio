import AboutPage from "./Components/About/About";
import HomePage from "./Components/Homepage/Homepage";
import MenuSuperior from "./Components/MenuSuperior/MenuSuperior";

function App() {
  return (
    <div className="App">
        <MenuSuperior />
        <HomePage />
        <AboutPage />
    </div>
  );
}

export default App;
