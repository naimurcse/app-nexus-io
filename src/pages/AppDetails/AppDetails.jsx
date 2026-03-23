import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { addToStoreDB, getFromStoreDB } from "../../utilities/addToDB";
import { formatCount } from "../../utilities/utilities";

const AppDetails = () => {
  const { appId } = useParams();
  const appData = useLoaderData();
  // const [isInstalled, setIsInstalled] = useState(false);

  const success = () => toast.success("Successfully Installed.");
  const warning = () => toast.warn("Already Installed.");

  const app = appData.find((app) => Number(app.id) === Number(appId));
  const {
    image,
    description,
    downloads,
    ratingAvg,
    reviews,
    title,
    ratings,
    size,
    companyName,
    id,
  } = app;

  const [isInstalled, setIsInstalled] = useState(() => {
    const storedData = getFromStoreDB();
    return storedData.includes(id);
  });

  const handleInstalledApp = (id) => {
    if (isInstalled) {
      warning();
    } else {
      success();
      setIsInstalled(true);
      addToStoreDB(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-15">
      <div className="flex items-stretch gap-10 border-b border-b-gray-300 pb-8">
        {/* Image */}
        <div className="w-40 md:w-56 lg:w-64 shrink-0 aspect-square overflow-hidden rounded-md">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>

        <div className="flex-2">
          <h2 className="font-bold text-[32px]">{title}</h2>
          <p className="text-[20px] text-[#627382] border-b border-b-gray-300 pb-3">
            Developed by{" "}
            <span className="text-[#812ce2]">{companyName}</span>{" "}
          </p>

          <div className="mt-6 flex gap-20">
            {/* Download */}
            <div>
              <img className="h-8" src={downloadIcon} alt="" />
              <p className="text-gray-500 mt-2">Download</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {formatCount(downloads)}
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
                {formatCount(reviews)}
              </p>
            </div>
          </div>

          {/* Install Btn */}
          <button
            onClick={() => handleInstalledApp(id)}
            className={`btn ${isInstalled ? "bg-gray-300 rounded-md text-black" : "btn-success text-white"}  font-normal mt-6`}
          >
            {" "}
            {/* {`Install Now (${size} MB)`} */}
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* Bar chart */}
      <div className="border-b border-b-gray-300 pb-8 mt-10">
        <BarChart
          layout="vertical"
          style={{
            width: "100%",
            // maxWidth: "500px",
            maxHeight: "35vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={ratings}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={70} />
          <Bar
            dataKey="count"
            fill="#ff8811"
            activeBar={{ fill: "#f07902" }}
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </div>

      {/* Description */}
      <div className="mt-10 mb-20">
        <h2 className="text-[24px] font-semibold mb-3">Description</h2>
        <p className="text-[18px] text-[#627382] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
