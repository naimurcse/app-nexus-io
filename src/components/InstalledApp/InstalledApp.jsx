import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { toast } from "react-toastify";
import { dataRemoveFromDB } from "../../utilities/addToDB";
import { formatCount } from "./../../utilities/utilities";

const InstalledApp = ({ app, onUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size, reviews } = app;

  const handleUninstall = () => {
    dataRemoveFromDB(id);
    onUninstall(id);
    toast("Successfully uninstalled.");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white py-3 px-4 gap-3 shadow-md">
        <div className=" md:text-start md:mx-0">
          <div className="flex flex-row gap-3">
            {/* Image */}
            <div className="hidden md:block  md:w-20 shrink-0 aspect-square overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>

            {/* Info */}
            <div className="py-2 flex flex-col justify-between">
              {/* Title */}
              <h3 className="text-[20px] font-semibold mb-2 md:mb-0 flex gap-2 items-center leading-5.5">
                <div className="w-10  rounded-4xl md:hidden shrink-0 aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt=""
                  />
                </div>{" "}
                {title}
              </h3>

              <div className="flex gap-5 text-[16px] font-normal">
                {/* Download */}
                <div className="flex items-center gap-1 text-green-500 font-normal">
                  <LuDownload />
                  {formatCount(downloads)}
                </div>

                {/* Ratings */}
                <div className="flex items-center gap-1 text-orange-400 font-normal">
                  {ratingAvg == 5 || ratingAvg >= 4 ? (
                    <FaStar />
                  ) : ratingAvg >= 2 ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaRegStar />
                  )}
                  {ratingAvg}
                </div>

                {/* Size */}
                <p className="text-[#627382]">{size} MB</p>

                {/* Reviews */}
                <div className="md:flex hidden items-center gap-1 text-[#632ee3] font-normal">
                  <MdOutlineRateReview />
                  {formatCount(reviews)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center md:text-start">
          <button
            onClick={handleUninstall}
            className="btn btn-success text-white font-normal"
          >
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default InstalledApp;
