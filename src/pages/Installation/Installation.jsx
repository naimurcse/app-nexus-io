import { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getFromStoreDB } from "../../utilities/addToDB";
import InstalledApp from "./../../components/InstalledApp/InstalledApp";

const Installation = () => {
  const allApps = useLoaderData();
  console.log(allApps);
  const [installApps, setInstallApps] = useState([]);

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
  console.log(installApps);

  return (
    <div className="max-w-7xl mx-auto mt-[60px] mb-[100px]">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-[48px] font-bold mb-1">Your Installed Apps</h2>
        <p className="text-[#627382] text-lg mb-14">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sorts */}
      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">
          ({installApps.length}) Apps Found
          {/* (44) Apps Found */}
        </div>
        <div>
          <label className="input bg-gray-100 w-100">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>

      {/* Installed App */}
      <div className="grid grid-cols-1 gap-4">
        {
          <Suspense fallback={<span>Loading....</span>}>
            {installApps.map((app) => (
              <InstalledApp key={app.id} app={app}></InstalledApp>
            ))}
          </Suspense>
        }
      </div>
    </div>
  );
};

export default Installation;
