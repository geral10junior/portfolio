import React from "react";
import { motion } from "framer-motion";
import Bikcraft from "../img/projects/bikcraft.svg";
import Move from "../img/projects/move.svg";
import Dogs from "../img/projects/dogs.svg";
import Animals from "../img/projects/animais-fantasticos.svg";
import Forest from "../img/projects/forest.svg";
import WorldCup from "../img/projects/world-cup.svg";

const Slide = () => {
  const [positionIndexes, setPositionIndexes] = React.useState([
    0, 1, 2, 3, 4, 5,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 6
      );
      return updatedIndexes;
    });
  };

  const handlePrevious = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 5) % 6
      );
      return updatedIndexes;
    });
  };
  const handleImageClick = (index: number, link: string) => {
    const currentPosition = positions[positionIndexes[index]];

    if (link && currentPosition === "center") {
      window.open(link, "_blank");
    }
  };
  const images = [
    { photo: Bikcraft, link: "https://geral10junior.github.io/bikCraft/" },
    {
      photo: Animals,
      link: "https://geral10junior.github.io/animais-fantasticos/",
    },
    { photo: Move, link: "https://move-currecy.vercel.app/" },
    { photo: WorldCup, link: "https://worldcup-info.vercel.app/" },
    { photo: Dogs, link: "https://dogs-seven-jade.vercel.app/" },
    { photo: Forest, link: "https://forest-coral.vercel.app/" },
  ];

  const positions = ["center", "left1", "left2", "back", "right2", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-60%", scale: 0.7, zIndex: 3, opacity: 1 },
    left2: { x: "-100%", scale: 0.5, zIndex: 2, opacity: 0.8 },
    back: { x: "0%", scale: 0.2, zIndex: 1, opacity: 0 },
    right2: { x: "100%", scale: 0.5, zIndex: 2, opacity: 0.8 },
    right1: { x: "60%", scale: 0.7, zIndex: 3, opacity: 1 },
  };

  return (
    <div
      id="projetos"
      className="container mx-auto flex flex-col items-center justify-center min-h-screen py-20 bg-neutral-900 overflow-hidden"
    >
      <div className="relative w-full flex justify-center items-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        {images.map((image, index) => {
          const isCenter = positions[positionIndexes[index]] === "center";
          return (
            <motion.img
              key={index}
              src={image.photo}
              alt={`Slide ${index}`}
              onClick={() => handleImageClick(index, image.link)}
              className={`rounded-sm border-2 shadow-2xl absolute 
                       w-[70%] sm:w-[50%] md:w-[50%] lg:w-[30%] ${
                         isCenter && image.link
                           ? "cursor-pointer hover:border-dashed hover:border-red-600"
                           : "cursor-default"
                       }`}
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </div>

      <div className="flex gap-4 justify-center mt-40 sm:mt-16 md:mt-4 lg:mt-12 w-full z-10">
        <button
          onClick={handlePrevious}
          className="cursor-pointer text-neutral-200 px-6 py-3 bg-neutral-800 rounded-md border-transparent border-2 hover:border-dashed hover:border-red-600 transition-all font-semibold uppercase text-sm tracking-wider shadow-lg"
        >
          <span>←</span> Anterior
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer text-neutral-200 px-6 py-3 bg-neutral-800 rounded-md border-transparent border-2 hover:border-dashed hover:border-red-600 transition-all font-semibold uppercase text-sm tracking-wider shadow-lg"
        >
          Próximo <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Slide;
