import "./App.css";
import LineChart from "./components/LinrChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      <PriceOptions />
      <LineChart />
    </>
  );
}

export default App;
