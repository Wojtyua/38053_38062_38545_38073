import CalculatorSection from "./components/CalculatorSection";
import Featured from "./components/Featured";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" text-text bg-background">
      <Navbar />
      <div className="px-24 mx-auto max-w-[1800px]">
        <LandingPage />
        <Featured />
        <CalculatorSection />
      </div>
    </div>
  );
}

export default App;
