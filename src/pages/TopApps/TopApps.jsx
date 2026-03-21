import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
const TopApps = () => {
  const apps = useLoaderData();
  //   console.log(apps);
  return (
    <div className="max-w-7xl mx-auto my-[80px]">
      <div className="text-center">
        <h2 className="text-[48px] font-bold mb-2">Trending Apps</h2>
        <p className="text-[#627382] text-xl mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps will be shown here */}
      <div className="grid grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default TopApps;
