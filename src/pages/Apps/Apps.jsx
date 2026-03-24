import { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  const handleSearchOnChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto  mt-10 lg:mt-15 mb-15 lg:mb-25">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-[24px] md:text-[28px] lg:text-[48px] font-bold mb-1">
          Our All Applications
        </h2>
        <p className="text-[#627382] text-md lg:text-lg mb-8 lg:mb-14">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row items-center justify-center md:justify-between mb-6">
        <div className="font-semibold md:font-bold text-lg lg:text-xl">
          ({filteredApps.length}) Apps Found
        </div>

        {/* Search */}
        <div>
          <label className="input bg-gray-100 xl:w-100">
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
            <input
              onChange={handleSearchOnChange}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-3 lg:gap-8 xl:gap-4">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
