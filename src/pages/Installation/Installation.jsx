import { Suspense, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getFromStoreDB } from "../../utilities/addToDB";
import InstalledApp from "./../../components/InstalledApp/InstalledApp";

const Installation = () => {
  const allApps = useLoaderData();
  // console.log(allApps);
  const [installApps, setInstallApps] = useState([]);
  const [sortType, setSortType] = useState("");

  console.log(sortType);
  useEffect(() => {
    const appFromDB = getFromStoreDB();
    console.log(appFromDB);
    const convertedNumberData = appFromDB.map((app) => Number(app));
    console.log(convertedNumberData);
    const installedApp = allApps.filter((app) =>
      convertedNumberData.includes(app.id),
    );
    setInstallApps(installedApp);
  }, []);
  // console.log(installApps);

  const handleSort = (type) => {
    setSortType(type);

    if (type === "review") {
      const sortedByReview = [...installApps].sort(
        (a, b) => b.reviews - a.reviews,
      );
      setInstallApps(sortedByReview);
    }
    if (type === "rating") {
      const sortedByRating = [...installApps].sort(
        (a, b) => b.ratingAvg - a.ratingAvg,
      );
      setInstallApps(sortedByRating);
    }
    if (type === "download") {
      const sortedByDownload = [...installApps].sort(
        (a, b) => b.downloads - a.downloads,
      );
      setInstallApps(sortedByDownload);
    }
    if (type === "size-ascending") {
      const sortedBySizeAZ = [...installApps].sort((a, b) => a.size - b.size);
      setInstallApps(sortedBySizeAZ);
    }
    if (type === "size-descending") {
      const sortedBySizeZA = [...installApps].sort((a, b) => b.size - a.size);
      setInstallApps(sortedBySizeZA);
    }
  };

  const handleUninstall = (id) => {
    setInstallApps((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto mt-[60px] mb-[100px]">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-[48px] font-bold mb-1">Your Installed Apps</h2>
        <p className="text-[#627382] text-lg mb-14">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">
          ({installApps.length}) Apps Found
        </div>

        {/* Sorts */}
        <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              {sortType === "review"
                ? "Sort By Review"
                : sortType === "rating"
                  ? "Sort By Rating"
                  : sortType === "download"
                    ? "Sort By Download"
                    : sortType === "size-ascending"
                      ? "Size (Low-High)"
                      : sortType === "size-descending"
                        ? "Size (High-Low)"
                        : "Sort By"}
              <IoMdArrowDropdown className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSort("review")}>
                <a>Review</a>
              </li>
              <li onClick={() => handleSort("rating")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleSort("download")}>
                <a>Download</a>
              </li>
              <li onClick={() => handleSort("size-ascending")}>
                <a>Size (Low-High)</a>
              </li>
              <li onClick={() => handleSort("size-descending")}>
                <a>Size (High-Low)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installed App */}
      <div className="grid grid-cols-1 gap-4">
        {
          <Suspense fallback={<span>Loading....</span>}>
            {installApps.map((app) => (
              <InstalledApp
                key={app.id}
                app={app}
                onUninstall={handleUninstall}
              ></InstalledApp>
            ))}
          </Suspense>
        }
      </div>
    </div>
  );
};

export default Installation;
