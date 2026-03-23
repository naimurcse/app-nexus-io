import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router";
import { formatCount } from "../../utilities/utilities";
const AppCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 w-76 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg h-50 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-2">{title}</h2>

          <div className="card-actions justify-between">
            <div className="badge rounded-sm bg-gray-100 text-green-500 font-normal">
              {/* <FaDownload /> */}
              <LuDownload />
              {formatCount(downloads)}
            </div>
            <div className="badge rounded-sm bg-gray-100 text-orange-400 font-normal">
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
          </div>
          {/* <div className="flex justify-between items-center">
            <p>{formatCount(downloads)}</p>
            <p>{ratingAvg}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
