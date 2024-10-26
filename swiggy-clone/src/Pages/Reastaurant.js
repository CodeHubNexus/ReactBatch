import { useParams } from "react-router-dom";
import "./../Style/restaurant.css";
import { useContext } from "react";
import { FetchContext } from "../UI/fetchContext";
const Restaurant = () => {
  const params = useParams();
  // console.log(params);
  const { resData } = useContext(FetchContext);
  const findRestaurant = resData.find((item) => {
    return item?.info?.id === params?.resId;
  });
  let name = findRestaurant?.info?.name;
  console.log(findRestaurant);

  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Noida / {name}</span>
      </div>
      <div className="restContainerfood">
        <div className="restInfo">
          <p>{name}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>DineOut</p>
          </div>
        </div>
        <div className="restaurantInfo">
          <div className="restaurantInfoContainer">
            <div className="primary">
              <p>
                Uh-oh! Outlet is not accepting orders at the moment. They should
                be back by 11:00 AM tomorrow
              </p>
            </div>
            <div className="secondary">
              <div className="secondaryInfo">
                <h4>3.6 (100+ ratings)</h4>
                <span>•</span>
                <h4>₹99 for two</h4>
              </div>
              <p>South Indian, Chinese</p>
              <div>
                <p>Outlet</p>
                <p>Crossing Republic</p>
              </div>
              <span>Closed & not delivering</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
