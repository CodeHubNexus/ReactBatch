import { useContext } from "react";
import "./../Style/home.css";
import { FetchContext } from "../UI/fetchContext";
import Card from "../UI/Card";

const Home = () => {
  const { resData } = useContext(FetchContext);
  // console.log(resData);

  return (
    <div className="homePageContainer">
      <h2>Restaurants with online food delivery in Noida</h2>
      <div className="cardContainer">
        {resData.map((res) => {
          return <Card resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Home;
