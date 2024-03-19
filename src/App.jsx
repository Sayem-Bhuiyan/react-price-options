import "./App.css";
import LineChart from "./components/LinrChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      <PriceOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
