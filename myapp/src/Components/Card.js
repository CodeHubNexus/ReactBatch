import P from "./P";

const Card = ({ msg }) => {
  return (
    <div className="card">
      <img src="download.jpeg" alt="l" />
      <p>Barbeque</p>
      <P>
        <span>jhfehjfberhjfberjhfberhjbf</span>
      </P>
      <p>{msg}</p>
    </div>
  );
};

export default Card;
