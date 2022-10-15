import { useState } from "react";
import "./App.css";
import LastSeenComponent from "./components/LastSeenComponent";

const App: React.FC = () => {
  const [lastSeen, setLastSeen] = useState<number>(1665839073539);

  return (
    <div className="App">
      <LastSeenComponent lastSeen={lastSeen} />
    </div>
  );
};

export default App;
