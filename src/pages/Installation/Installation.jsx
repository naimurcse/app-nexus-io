import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getFromStoreDB } from "../../utilities/addToDB";

const Installation = () => {
  const allApps = useLoaderData();
  console.log(allApps);
  const [installApps, setInstallApps] = useState();

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
    <div className="max-w-7xl mx-auto py-20">
      <h2>I'm Installation</h2>
    </div>
  );
};

export default Installation;
