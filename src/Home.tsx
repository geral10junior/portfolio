import Header from "./Header.tsx";
import MainPhoto from "./img/home.svg";
import leftHand from "./img/left-hand.svg";
import RightHand from "./img/right-hand.svg";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-[180px] flex justify-center">
        <div className="max-w-[1349px] relative flex">
          <img
            className="max-w-[281px] max-lg:hidden absolute xl:-left-80 -left-50  bottom-40"
            src={leftHand}
            alt=""
          />
          <img src={MainPhoto} alt="" />
          <img
            className="max-w-[281px] max-lg:hidden absolute xl:-right-80 -right-50  bottom-40"
            src={RightHand}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
