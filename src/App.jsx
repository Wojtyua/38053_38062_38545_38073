import CalculatorSection from "./components/CalculatorSection";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-16 text-text bg-background">
      <Navbar />
      <LandingPage />
      <CalculatorSection />
    </div>
  );
}

export default App;
