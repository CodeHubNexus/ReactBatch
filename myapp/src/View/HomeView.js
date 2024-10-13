import Card from "../Components/Card";

export const HomeView = (props) => {
  console.log(props);

  const a = [1, 2, 3, 4, 5, 6, 3, 4, 4, 4, 4, 8];
  return (
    <>
      <div>
        {a.map((el, i) => (
          <Card key={i} msg={props.message} />
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      <p>lorsdjhvbshjgvsjhfbsdjhhhbvdsjh</p>
    </>
  );
};
