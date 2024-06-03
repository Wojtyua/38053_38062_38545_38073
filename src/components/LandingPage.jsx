import "./landingPage.css";
import ChangingText from "./ChangingText";

const LandingPage = () => {
  const changingWords = ["kalorie!", "zdrowie!"];

  return (
    <div className="grid items-center grid-cols-2 mt-12">
      <div>
        <div className="">
          <h1 className="text-6xl font-bold tracking-wider">
            Skorzstaj z naszego kalkulatora i już dziś licz swoje{" "}
            <ChangingText words={changingWords} />
          </h1>
        </div>
      </div>
      <div>
        <h2>Policz swoje kalorie</h2>
      </div>
    </div>
  );
};

export default LandingPage;
