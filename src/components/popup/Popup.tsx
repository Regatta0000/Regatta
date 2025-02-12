import bgImage from "../../resourcess/img/bg.png";
import closeImage from "../../resourcess/img/Close_btn.svg";
import DOBImage from "../../resourcess/img/DOB.svg";
import speciesImage from "../../resourcess/img/Species.svg";
import genderImage from "../../resourcess/img/Gender.svg";
import homeWorldImage from "../../resourcess/img/Home_world.svg";
import filmsImage from "../../resourcess/img/Films.svg";

const Popup = () => {
  const atributes = [
    { icon: DOBImage, title: "Birth year", value: "Birth year" },
    { icon: speciesImage, title: "Species", value: "Species" },
    { icon: genderImage, title: "Gender", value: "Gender" },
    { icon: homeWorldImage, title: "Homeworld", value: "Homeworld" },
    { icon: filmsImage, title: "Films", value: "Films" },
  ];

  return (
    <div className="min-h-142 bg-[#1A1A1A] pr-6 pl-6">
      <img
        className="absolute top-4 right-4 cursor-pointer"
        src={closeImage}
        alt="Close"
      />
      <div className="flex items-center pt-12 pb-12">
        <img src={bgImage} alt="Icon" />
        <div className="font-roboto pl-4 text-[22px] text-[#fff]">Name</div>
      </div>
      <div className="mb-8 border-b-1 border-[#808080]"></div>

      {/* {atributes.map((atribute) => (
        <div>
          <div className="mt-4 flex items-center">
            <img src={atribute.icon} alt="DOB" />
            <div className="flex gap-10">
              <div className="font-roboto ml-1 text-base text-[#808080]">
                {atribute.title}
              </div>
              <div className="font-roboto text-base font-bold text-[#fff]">
                {atribute.value}
              </div>
            </div>
          </div>
        </div>
      ))} */}

      {/* <div className="">
        {atributes.map((atribute) => (
          <div className="relative mt-4 flex items-center">
            <img src={atribute.icon} alt={atribute.title} />
            <div className="font-roboto absolute ml-40 text-base font-bold text-[#fff] sm:ml-90 md:ml-120 lg:ml-150">
              {atribute.value}
            </div>
            <div className="font-roboto ml-4 text-base text-[#808080]">
              {atribute.title}
            </div>
          </div>
        ))}
      </div> */}

      <div className="">
        {atributes.map((atribute) => (
          <div className="relative mt-4 flex items-center">
            <img src={atribute.icon} alt={atribute.title} />
            <div className="font-roboto md absolute ml-40 text-base font-bold text-[#fff]">
              {atribute.value}
            </div>
            <div className="font-roboto ml-4 text-base text-[#808080]">
              {atribute.title}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {atributes.map((atribute) => (
          <div className="flex items-center justify-between lg:justify-start">
            <div className="flex items-center">
              <img src={atribute.icon} alt={atribute.title} />
              <div className="font-roboto ml-4 text-base text-[#808080]">
                {atribute.title}
              </div>
            </div>
            <div className="font-roboto ml-4 text-base font-bold text-[#fff] lg:ml-12">
              {atribute.value}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Popup;
