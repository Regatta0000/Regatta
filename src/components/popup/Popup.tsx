import closeImage from "../../resourcess/img/Close_btn.svg";
import DOBImage from "../../resourcess/img/DOB.svg";
import speciesImage from "../../resourcess/img/Species.svg";
import genderImage from "../../resourcess/img/Gender.svg";
import homeWorldImage from "../../resourcess/img/Home_world.svg";
import filmsImage from "../../resourcess/img/Films.svg";
import { FC } from "react";
import { getRandomColor } from "../utils/ColorUtils";

const Popup: FC<{ onClose: () => void; character }> = ({
  character,
  onClose,
}) => {
  const atributes = [
    { icon: DOBImage, title: "Birth year", value: character.birth_year },
    {
      icon: speciesImage,
      title: "Species",
      value: character.species || "Unknown",
    },
    {
      icon: genderImage,
      title: "Gender",
      value: character.gender || "Unknown",
    },
    {
      icon: homeWorldImage,
      title: "Homeworld",
      value: character.homeworld || "Unknown",
    },
    {
      icon: filmsImage,
      title: "Films",
      value: character.films.join(", ") || "Unknown",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full overflow-y-auto bg-[#1A1A1A] pr-6 pl-6 md:max-h-123 md:max-w-200 md:rounded-lg md:pr-20 md:pl-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="absolute top-4 right-4 cursor-pointer"
          src={closeImage}
          alt="Close"
          onClick={onClose}
        />
        <div className="flex items-center pt-12 pb-12 md:pt-20 md:pb-20">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="text-5xl text-white">{character.name[0]}</span>
          </div>
          <div className="font-roboto pl-4 text-[22px] text-[#fff]">
            {character.name}
          </div>
        </div>
        <div className="mb-8 border-b-1 border-[#808080] md:mb-15"></div>

        <div className="grid grid-cols-1 gap-2 md:mb-19 md:grid-cols-2 md:gap-0 md:gap-x-10">
          {atributes.map((atribute, index) => (
            <div className="mt-4 flex items-start" key={index}>
              <img src={atribute.icon} alt={atribute.title} />

              <div className="flex w-full gap-4">
                <div className="font-roboto ml-4 w-[100px] text-base text-[#808080]">
                  {atribute.title}
                </div>
                <div className="font-roboto ml-4 flex-1 text-base font-bold break-all text-[#fff]">
                  {atribute.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
