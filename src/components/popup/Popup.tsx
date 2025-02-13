import bgImage from "../../resourcess/img/bg.png";
import closeImage from "../../resourcess/img/Close_btn.svg";
import DOBImage from "../../resourcess/img/DOB.svg";
import speciesImage from "../../resourcess/img/Species.svg";
import genderImage from "../../resourcess/img/Gender.svg";
import homeWorldImage from "../../resourcess/img/Home_world.svg";
import filmsImage from "../../resourcess/img/Films.svg";

const Popup = ({ onClose }) => {
  const atributes = [
    { icon: DOBImage, title: "Birth year", value: "Birth year" },
    { icon: speciesImage, title: "Species", value: "Species" },
    { icon: genderImage, title: "Gender", value: "Gender" },
    {
      icon: homeWorldImage,
      title: "Homeworld",
      value: "Homeworld",
    },
    {
      icon: filmsImage,
      title: "Films",
      value: "Films",
    },
  ];

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full bg-[#1A1A1A] pr-6 pl-6 md:max-h-123 md:max-w-200 md:rounded-lg md:pr-20 md:pl-20"
        onClick={handlePopupClick}
      >
        <img
          className="absolute top-4 right-4 cursor-pointer"
          src={closeImage}
          alt="Close"
          onClick={onClose}
        />
        <div className="flex items-center pt-12 pb-12 md:pt-20 md:pb-20">
          <img src={bgImage} alt="Icon" />
          <div className="font-roboto pl-4 text-[22px] text-[#fff]">Name</div>
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
