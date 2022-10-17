import React, { useEffect, useState } from "react";
import "./App.css";
import LastSeenComponent from "./components/LastSeen/LastSeenComponent";

const App: React.FC = () => {
  //formattedDate is a date formatted into "YYYY-MM-DDThh:ss"
  const dateObject: Date = new Date();
  const formattedDate: string = `${dateObject.getFullYear()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getDate()}T${
    dateObject.getHours() < 10
      ? `0${dateObject.getHours}`
      : `${dateObject.getHours}`
  }:${
    dateObject.getMinutes() < 10
      ? `0${dateObject.getMinutes()}`
      : `${dateObject.getMinutes()}`
  }`;

  const [lastSeen, setLastSeen] = useState<number>(Date.now());
  const [inputDate, setInputDate] = useState<string>(formattedDate);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLastSeen(new Date(e.currentTarget.value).getTime());
    setInputDate(e.currentTarget.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSeen((lastSeen) => lastSeen + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="content-container">
        <label htmlFor="date-input">Select date</label>
        <input
          name="date-input"
          className="date-input"
          type={"datetime-local"}
          onChange={handleChange}
          defaultValue={inputDate}
        ></input>
        <LastSeenComponent lastSeen={lastSeen} />
      </div>
    </div>
  );
};

export default App;
