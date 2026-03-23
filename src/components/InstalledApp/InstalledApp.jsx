import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { formatCount } from "./../../utilities/utilities";

const InstalledApp = ({ app }) => {
  // console.log(app);
  const { image, title, downloads, ratingAvg, size, reviews } = app;
  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-4 gap-3 shadow-md">
        <div>
          <div className="flex gap-3">
            {/* Image */}
            <div className="w-40 md:w-56 lg:w-20 shrink-0 aspect-square overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>

            {/* Info */}
            <div className="py-2 flex flex-col justify-between">
              <h3 className="text-[20px] font-semibold"> {title}</h3>
              <div className="flex gap-5 text-[16px] font-normal">
                <div className="flex items-center gap-1 text-green-500 font-normal">
                  {/* <FaDownload /> */}
                  <LuDownload />
                  {formatCount(downloads)}
                </div>
                <div className="flex items-center gap-1 text-orange-400 font-normal">
                  {/* <FaStar /> */}
                  {ratingAvg == 5 || ratingAvg >= 4 ? (
                    <FaStar />
                  ) : ratingAvg >= 2 ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaRegStar />
                  )}
                  {ratingAvg}
                </div>

                <p className="text-[#627382]">{size} MB</p>

                <div className="flex items-center gap-1 text-[#632ee3] font-normal">
                  {/* <FaDownload /> */}
                  <MdOutlineRateReview />
                  {formatCount(reviews)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="btn btn-success text-white font-normal">
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default InstalledApp;
