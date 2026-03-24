import { RechartsDevtools } from "@recharts/devtools";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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
    <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto my-15">
      <div className="flex items-stretch gap-10 border-b border-b-gray-300 pb-8">
        {/* Image */}
        <div className="hidden lg:block md:w-56 lg:w-64 shrink-0 aspect-square overflow-hidden rounded-md">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>

        <div className="flex-2">
          <div className="flex items-center gap-4">
            {/* App Logo */}
            <div className="block lg:hidden w-16 md:w-22 shrink-0 aspect-square overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>

            {/* App Title */}
            <div>
              <h2 className="font-bold text-2xl md:text-[32px]">{title}</h2>
              <p className="text-sm md:text-[20px] text-[#627382] border-b border-b-gray-300 pb-3">
                Developed by{" "}
                <span className="text-[#812ce2]">{companyName}</span>{" "}
              </p>
            </div>
          </div>

          {/* Install Btn */}
          <div className="text-center md:hidden md:text-start">
            <button
              onClick={() => handleInstalledApp(id)}
              className={`btn ${isInstalled ? "bg-gray-300 rounded-md text-black" : "btn-success text-white"} font-normal mt-6`}
            >
              {" "}
              {/* {`Install Now (${size} MB)`} */}
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>

          {/* Statistic */}
          <div className="mt-6 flex flex-row-reverse md:flex-row flex-wrap  text-center md:text-start gap-4 md:gap-20">
            {/* Download */}
            <div className="flex-11/12 md:flex-1">
              <img className="h-8 mx-auto md:mx-0" src={downloadIcon} alt="" />
              <p className="text-gray-500 mt-2">Download</p>
              <p className="text-[20px] md:text-[40px] font-extrabold text-[#001931]">
                {formatCount(downloads)}
              </p>
            </div>

            {/* Average Ratings */}
            <div className="flex-1">
              <img className="h-8  mx-auto md:mx-0" src={ratingsIcon} alt="" />
              <p className="text-gray-500 mt-2">Average Ratings</p>
              <p className="text-[20px] md:text-[40px]  font-extrabold text-[#001931]">
                {ratingAvg}
              </p>
            </div>

            {/* Total Reviews */}
            <div className="flex-1">
              <img className="h-8  mx-auto md:mx-0" src={reviewIcon} alt="" />
              <p className="text-gray-500 mt-2">Total Reviews</p>
              <p className="text-[20px] md:text-[40px]  font-extrabold text-[#001931]">
                {formatCount(reviews)}
              </p>
            </div>
          </div>

          {/* Install Btn */}
          <div className="text-center hidden md:block md:text-start">
            <button
              onClick={() => handleInstalledApp(id)}
              className={`btn ${isInstalled ? "bg-gray-300 rounded-md text-black" : "btn-success text-white"} font-normal mt-6`}
            >
              {" "}
              {/* {`Install Now (${size} MB)`} */}
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
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
          <Tooltip />
          <Legend />
          <RechartsDevtools />
        </BarChart>
      </div>

      {/* Description */}
      <div className="mt-10 mb-20">
        <h2 className="text-xl md:text-[24px] font-semibold mb-3">
          Description
        </h2>
        {description.split("\n\n").map((para, index) => (
          <p
            key={index}
            className="text-md md:text-[18px] text-[#627382] font-normal leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AppDetails;
