import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
const Apps = () => {
  const apps = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-15">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-[48px] font-bold mb-1">Our All Applications</h2>
        <p className="text-[#627382] text-lg mb-14">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="font-bold text-xl">({apps.length}) Apps Found</div>
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

      <div className="grid grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
