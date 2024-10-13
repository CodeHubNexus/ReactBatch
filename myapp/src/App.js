import "./App.css";
import Header from "./Common/Header";
import CounterPage from "./Pages/CounterPage";
import HomePage from "./Pages/HomePage";

function App() {
  // console.log("page 1");

  return (
    <>
      <Header></Header>
      {/* <HomePage /> */}
      <CounterPage />
    </>
  );
}

export default App;
