import { HomeView } from "../View/HomeView";

const HomePage = () => {
  const b = "hi food is delicious";
  return (
    <main>
      <HomeView message={b} />
    </main>
  );
};

export default HomePage;
