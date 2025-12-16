import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Bikcraft from "../img/projects/bikcraft.svg";
import Move from "../img/projects/move.svg";
import Dogs from "../img/projects/dogs.svg";
import Animals from "../img/projects/animais-fantasticos.svg";
import Forest from "../img/projects/forest.svg";
import WorldCup from "../img/projects/world-cup.svg";

const Slide = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  const handlePrevious = () => {
    carouselApi?.scrollPrev();
  };

  React.useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
    const onDragStart = () => setIsDragging(true);
    const onDragEnd = () => setIsDragging(false);

    onSelect();
    carouselApi.on("select", onSelect);
    (carouselApi as any).on("dragStart", onDragStart);
    (carouselApi as any).on("dragEnd", onDragEnd);

    return () => {
      carouselApi.off("select", onSelect);
      (carouselApi as any).off("dragStart", onDragStart);
      (carouselApi as any).off("dragEnd", onDragEnd);
    };
  }, [carouselApi]);

  const handleImageClick = (index: number, link: string) => {
    if (isDragging) return;
    if (link && index === selectedIndex) {
      window.open(link, "_blank");
    } else {
      carouselApi?.scrollTo(index);
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

  return (
    <div
      id="projetos"
      className="container mx-auto flex flex-col items-center justify-center min-h-screen py-6 md:py-12 bg-neutral-900 overflow-hidden"
    >
      <Carousel
        setApi={setCarouselApi}
        className="w-full max-w-[1600px]"
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="h-[450px] sm:h-[600px] md:h-[500px] lg:h-[600px] items-center py-8">
          {images.map((image, index) => {
            const isCenter = index === selectedIndex;
            return (
              <CarouselItem
                key={index}
                className="basis-[75%] sm:basis-[60%] md:basis-[45%] lg:basis-[33.333%]"
              >
                <div className="relative flex justify-center items-center h-full px-2 sm:px-4">
                  <motion.img
                    src={image.photo}
                    alt={`Slide ${index}`}
                    onClick={() => handleImageClick(index, image.link)}
                    initial={false}
                    animate={
                      isCenter
                        ? {
                            scale: 1,
                            zIndex: 50,
                            opacity: 1,
                            filter: "grayscale(0%)",
                          }
                        : {
                            scale: 0.7,
                            zIndex: 10,
                            opacity: 0.4,
                            filter: "grayscale(100%)",
                          }
                    }
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`
                      rounded-xl border-2 shadow-2xl object-contain
                      w-full h-auto
                      max-w-[260px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px]
                      ${
                        isCenter
                          ? "cursor-pointer border-red-600 hover:border-dashed"
                          : "cursor-default border-transparent"
                      }
                    `}
                    style={{
                      pointerEvents: isDragging ? "none" : "auto",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-8 w-full z-10">
        <button
          onClick={handlePrevious}
          className="cursor-pointer text-neutral-200 px-8 py-3 bg-neutral-800 rounded-lg border-dashed border-2 border-transparent hover:border-red-600 hover:text-white transition-all font-bold uppercase text-xs sm:text-sm tracking-widest shadow-lg flex items-center gap-2"
        >
          <span>←</span> Anterior
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer text-neutral-200 px-8 py-3 bg-neutral-800 rounded-lg border-dashed border-2 border-transparent hover:border-red-600 hover:text-white transition-all font-bold uppercase text-xs sm:text-sm tracking-widest shadow-lg flex items-center gap-2"
        >
          Próximo <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Slide;
