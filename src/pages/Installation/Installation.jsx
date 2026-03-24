import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData, useNavigation } from "react-router";
import PleaseInstall from "../../components/PleaseInstall/PleaseInstall";
import { getFromStoreDB } from "../../utilities/addToDB";
import AppNotFound from "../AppNotFound/AppNotFound";
import InstalledApp from "./../../components/InstalledApp/InstalledApp";

const Installation = () => {
  const allApps = useLoaderData();
  // console.log(allApps);
  const [installApps, setInstallApps] = useState([]);
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  let isNavigating = Boolean(navigation.location);

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
    setLoading(false);
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
    if (type === "download-ascending") {
      const sortedByDownloadAZ = [...installApps].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setInstallApps(sortedByDownloadAZ);
    }
    if (type === "download-descending") {
      const sortedByDownloadZA = [...installApps].sort(
        (a, b) => b.downloads - a.downloads,
      );
      setInstallApps(sortedByDownloadZA);
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
    <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-10 lg:mt-15 mb-15 lg:mb-25">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-[24px] md:text-[28px] lg:text-[48px] font-bold mb-1">
          Your Installed Apps
        </h2>
        <p className="text-[#627382] text-md lg:text-lg mb-8 lg:mb-14">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row items-center justify-center md:justify-between mb-6">
        <div className="font-semibold md:font-bold text-lg lg:text-xl">
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
                  : sortType === "download-ascending"
                    ? "Download (Low-High)"
                    : sortType === "download-descending"
                      ? "Download (High-Low)"
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
              <li onClick={() => handleSort("download-ascending")}>
                <a>Download (Low-High)</a>
              </li>
              <li onClick={() => handleSort("download-descending")}>
                <a>Download (High-Low)</a>
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
        {installApps.map((app) => (
          <InstalledApp
            key={app.id}
            app={app}
            onUninstall={handleUninstall}
          ></InstalledApp>
        ))}
      </div>
      {installApps.length == 0 && !isNavigating && !loading && (
        <AppNotFound Message={<PleaseInstall />}></AppNotFound>
      )}
    </div>
  );
};

export default Installation;
