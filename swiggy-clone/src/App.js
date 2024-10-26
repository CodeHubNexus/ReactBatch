import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import { FetchContext } from "./UI/fetchContext";

function App() {
  const [resData, setRestData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/restaurant.json");
      const data = await response.json();
      // console.log(data[0].info);

      setRestData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <FetchContext.Provider value={{ resData }}>
        <Header></Header>

        <Outlet />
      </FetchContext.Provider>
    </div>
  );
}

export default App;
