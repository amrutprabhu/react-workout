import { DataStore } from "@aws-amplify/datastore";
import { useEffect } from "react";
import "./App.css";
import { Blog } from "./models";
import { useState } from "react";

// AWS tutorial from Ali Spittel

function App() {
  const [models, setmodel] = useState([]);
  const pulldata = async () => {
    const blogs = await DataStore.query(Blog);
    console.log(blogs);
    setmodel(blogs);
  };
  useEffect(() => {
    
    pulldata();
  }, []);

  const saveData = async () => {
    await DataStore.save(
      new Blog({
        name: "New value amet",
        Posts: [],
      })
    );
    pulldata();
  };
  return (
    <div className="App">
      {models.map((model) => (
        <span>{model.name}------</span>
      ))}
      <button onClick={saveData}> SaveData</button>
    </div>
  );
}

export default App;
