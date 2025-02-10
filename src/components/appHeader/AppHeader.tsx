import appHeaderImage from "../../resourcess/img/AppHeader.png";
import appBannerImage from "../../resourcess/img/AppBanner.png";

const AppHeader = () => {
  return (
    <div className="item-center relative flex justify-center p-14">
      <img
        src={appHeaderImage}
        alt="Header"
        className="absolute inset-0 size-full object-cover"
      />
      <img src={appBannerImage} className="z-10" alt="Banner" />
    </div>
  );
};

export default AppHeader;
