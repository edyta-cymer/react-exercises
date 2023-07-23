import "./App.css";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
