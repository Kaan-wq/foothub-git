import './App.css';
import Banner from "./components/Banner";
import Matches from "./components/Matches"
import Stats from "./components/Stats";
import Chat from "./components/Chat";

function App() {
  return (
      <div>
          <Banner children={"FootHub"} />
          <Matches />
          <Stats />
          <Chat />
      </div>
  );
}

export default App;
