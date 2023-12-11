import {useState} from "react";
import uuid from "react-uuid";
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {

  const [quests, setQuests] = useState([]);

  const onAddQuest=()=>{
    const newQuest = {
      id: uuid(),
      title:"Untitled Quest",
      body: "",
      lastModified: Date.now(),
    }
    setQuests([newQuest, ...quests]);
    console.log("Quest Added!");
  }

  return (
    <div className="App">
      <Sidebar quests={quests} onAddQuest={onAddQuest}/>
      <Main/>
    </div>
  );
}

export default App;
