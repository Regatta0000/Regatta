import { useState, useEffect } from "react";
import Popup from "../popup/Popup";
import Loupe from "../icons/Loupe";
import { getRandomColor } from "../utils/ColorUtils";

const CharList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const openPopup = (character) => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      const charactersWithSpecies = await Promise.all(
        data.results.map(async (character) => {
          const speciesNames = await Promise.all(
            character.species.map(async (speciesUrl) => {
              const speciesResponse = await fetch(speciesUrl);
              const speciesData = await speciesResponse.json();
              return speciesData.name;
            }),
          );
          return { ...character, species: speciesNames.join(", ") };
        }),
      );
      setCharacters(charactersWithSpecies);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((characters) =>
    characters.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-120 bg-[#333333] p-6 py-8 xl:pt-20 xl:pr-28 xl:pl-28">
      <div className="xl:mx-52">
        <div className="relative flex w-full items-center gap-2 border-b-1 border-[#808080]">
          <input
            id="searchInput"
            type="text"
            placeholder=" "
            className="font-roboto peer w-full pb-2 text-[#808080] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label
            htmlFor="searchInput"
            className="absolute top-0 left-0 text-base text-[#808080] transition-all duration-200 peer-focus:left-0 peer-focus:translate-y-[-1.5rem] peer-focus:text-sm"
          >
            Search by name
          </label>
          <Loupe className="" />
        </div>
      </div>

      <div className="mt-11 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-8 xl:mt-14">
        {filteredCharacters.map((character, index) => (
          <div
            className="mt-6 min-h-50 min-w-68 rounded-lg bg-[#1A1A1A] xl:min-h-80"
            key={index}
            onClick={() => openPopup(character)}
          >
            <div className="flex flex-col items-center justify-center p-8 transition hover:shadow-[0px_10px_40px_0px_rgba(37,136,167,0.38)] xl:p-22">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: getRandomColor() }}
              >
                <span className="text-5xl text-white">{character.name[0]}</span>
              </div>
              <div className="font-roboto mt-2 text-[18px] font-bold text-white">
                {character.name}
              </div>
              <div className="font-roboto mt-2 text-[13px] text-[#808080]">
                {character.species || "Unknown"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={closePopup}
        ></div>
      )}

      {isPopupOpen && selectedCharacter && (
        <Popup character={selectedCharacter} onClose={closePopup} />
      )}
    </div>
  );
};

export default CharList;
