import { useNavigate } from "react-router-dom";

const Card = ({ resData }) => {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/restaurant/${resData.info.id}`);
  };
  return (
    <div className="card" onClick={redirectHandler}>
      <img
        alt="restaurant images"
        src={`/images/${resData?.info?.cloudinaryImageId}.avif`}
      />
      <div className="card__Data">
        <h3 className="card__Res__Name">{resData?.info?.name}</h3>

        <>
          <div className="cardResCuisines">
            {resData?.info.cuisines.join(",")}
          </div>
          <div className="cardResPrice">{resData?.info.costForTwo}</div>
          <div className="cardResInfo">
            <span className="cardResRating">{resData?.info.avgRating}</span>
            <span className="cardResTime">3.2</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Card;
