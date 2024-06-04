import "./landingPage.css";
import ChangingText from "./ChangingText";
import Button from "./ui/Button";
import { FaAnglesDown } from "react-icons/fa6";

const LandingPage = () => {
  const changingWords = ["Kalorie!", "Zdrowie!"];

  return (
    <div
      className="grid grid-cols-2 h-full pt-48 px-12 space-x-6"
      id="landing-page"
    >
      <div>
        <div className="space-y-24">
          <div className="space-y-10">
            <h1 className="text-6xl font-bold tracking-wider leading-tight text-balance">
              Skorzystaj z Naszego Kalkulatora i Zacznij Liczyć Swoje{" "}
              <ChangingText words={changingWords} />
            </h1>
            <p className="text-textLight">
              Dzięki naszej zaawasowanej technologii liczenia kalorii zadbaj o
              zdrowie już dziś!
            </p>
          </div>
          <div className="space-x-4">
            <Button type="secondary">Dowiedz się więcej</Button>

            <Button type="primary">Zacznij liczyć</Button>
          </div>
        </div>
      </div>
      <div className="items-center text-center">
        <img src="kalkulator2.jpg" alt="Kalkulator" />
      </div>

      <div className="absolute right-1/2 bottom-12 animate-bounce">
        <FaAnglesDown fill="#7ca064" size={24} />
      </div>
    </div>
  );
};

export default LandingPage;
