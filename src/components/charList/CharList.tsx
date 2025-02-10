import Loupe from "../icons/Loupe";

const CharList = () => {
  return (
    <div className="min-h-120 bg-[#333333] p-6 py-8">
      <input
        type="text"
        placeholder="Search by name"
        className="font-roboto relative w-full border-b-1 pb-2 text-base text-[#808080]"
      />
      <Loupe className="absolute right-0 bottom-1" />
    </div>
  );
};

export default CharList;
