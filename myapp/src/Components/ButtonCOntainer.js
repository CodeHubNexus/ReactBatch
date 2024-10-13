const ButtonContainer = ({ a, handleProps }) => {
  //   console.log("View page");

  const handleIncrement = () => {
    // console.log("button clicked");
    handleProps(a + 1);
  };
  const handleDecrement = () => {
    // console.log("button clicked 1");
    handleProps(a - 1);
  };
  return (
    <div className="buttonCont">
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};
export default ButtonContainer;
