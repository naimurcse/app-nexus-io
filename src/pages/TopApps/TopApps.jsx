import { Link } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
const TopApps = ({ apps }) => {
  const topEight = apps.slice(0, 8);
  console.log(apps);
  console.log(topEight);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center">
        <h2 className="text-[48px] font-bold mb-1">Trending Apps</h2>
        <p className="text-[#627382] text-lg mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps will be shown here */}
      <div className="grid grid-cols-4 gap-4">
        {topEight.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>

      {/* Show button */}
      <div className="text-center mt-10">
        <Link to="/apps">
          <button className="gradient-btn px-8 py-3 rounded-md text-white text-[20px] font-semibold">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopApps;
