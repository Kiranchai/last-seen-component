import React, { useState } from "react";
import "./App.css";
import LastSeenComponent from "./components/LastSeenComponent";

const App: React.FC = () => {
  const [lastSeen, setLastSeen] = useState<number>(1665839073539);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLastSeen(new Date(e.currentTarget.value).getTime());
  };

  return (
    <div className="App">
      <input type={"datetime-local"} onChange={handleChange}></input>

      <LastSeenComponent lastSeen={lastSeen} />
    </div>
  );
};

export default App;
