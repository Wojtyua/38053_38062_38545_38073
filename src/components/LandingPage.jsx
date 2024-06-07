import "./landingPage.css";
import ChangingText from "./ChangingText";
import Button from "./ui/Button";

import { Link } from "react-scroll";

const LandingPage = () => {
  const changingWords = ["Kalorie!", "Zdrowie!"];

  return (
    <div
      className="grid grid-cols-2 pt-48 px-12 space-x-12 mb-32"
      id="landing-page"
    >
      <div>
        <div className="space-y-24 h-full">
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
          <Link to="about" smooth={true} duration={500}>
            <Button type="secondary">
                Dowiedz się więcej{" "}
            </Button>
          </Link>
          <Link to="calculator-section" smooth={true} duration={500}>
            <Button type="primary">
                Zacznij liczyć
            </Button>
          </Link>
          </div>
        </div>
      </div>
      <div className="items-center text-center">
        <img src="kalkulator2.jpg" alt="Kalkulator" />
      </div>
    </div>
  );
};

export default LandingPage;
