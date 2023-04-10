import './App.css';
import Banner from "./components/Banner";
import Matches from "./components/Matches"
import Stats from "./components/Stats";

function App() {
  return (
      <div>
          <Banner children={"FootHub"} />
          <Matches />
          <Stats />
      </div>
  );
}

export default App;
