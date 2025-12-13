import Header from "./Header.tsx";
import MainPhoto from "./img/home.svg";
import leftHand from "./img/left-hand.svg";
import RightHand from "./img/right-hand.svg";

export const Home = () => {
  return (
    <div>
      <Header />
      <div
        id="home"
        className="container mt-[180px] flex justify-center min-h-[500px] md:min-h-[500px] xl:min-h-[600px]"
      >
        <div className="max-w-[1349px] relative flex ">
          <img
            className="animaLeft max-w-[281px] max-lg:hidden absolute xl:-left-80 -left-50  bottom-40"
            src={leftHand}
            alt=""
          />
          <img className="animaBottom" src={MainPhoto} alt="" />
          <img
            className="animaRight max-w-[281px] max-lg:hidden absolute xl:-right-80 -right-50  bottom-40"
            src={RightHand}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
