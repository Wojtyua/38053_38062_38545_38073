import CalculatorSection from "./components/CalculatorSection";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-24 text-text bg-background">
      <div className=" mx-auto max-w-[1800px]">
        <div className="h-screen">
          <Navbar />
          <LandingPage />
        </div>
        <CalculatorSection />
      </div>
    </div>
  );
}

export default App;
