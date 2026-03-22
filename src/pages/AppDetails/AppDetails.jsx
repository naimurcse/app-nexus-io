import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
const AppDetails = () => {
  const { appId } = useParams();
  const appData = useLoaderData();
  //   console.log(typeof Number(appId));
  //   console.log(appData);

  const app = appData.find((app) => Number(app.id) === Number(appId));
  console.log(app);
  const {
    image,
    description,
    downloads,
    id,
    ratingAvg,
    reviews,
    size,
    title,
    ratings,
    companyName,
  } = app;
  return (
    <div className="max-w-7xl mx-auto my-15">
      <div className="flex gap-10">
        <div>
          <img className="h-60" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-[32px]">{title}</h2>
          <p className="text-[20px] text-[#627382] border-b-1 border-b-gray-300 pb-3">
            Developed by{" "}
            <span className="text-[#812ce2]">{companyName}</span>{" "}
          </p>

          <div className="mt-6 flex gap-20">
            {/* Download */}
            <div>
              <img className="h-8" src={downloadIcon} alt="" />
              <p className="text-gray-500 mt-2">Download</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {downloads}
              </p>
            </div>

            {/* Average Ratings */}
            <div>
              <img className="h-8" src={ratingsIcon} alt="" />
              <p className="text-gray-500 mt-2">Average Ratings</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {ratingAvg}
              </p>
            </div>

            {/* Total Reviews */}
            <div>
              <img className="h-8" src={reviewIcon} alt="" />
              <p className="text-gray-500 mt-2">Total Reviews</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {reviews}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
