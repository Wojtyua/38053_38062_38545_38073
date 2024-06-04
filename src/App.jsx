import CalculatorSection from "./components/CalculatorSection";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-24 text-text bg-background">
      <div className="h-screen">
        <Navbar />
        <LandingPage />
      </div>
      <CalculatorSection />
    </div>
  );
}

export default App;
