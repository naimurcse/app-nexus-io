import { Suspense } from "react";
import { useLoaderData } from "react-router";
import Hero from "../../components/Header/Hero";
import Statistic from "../../components/Statistic/Statistic";
import TopApps from "../TopApps/TopApps";

const Home = () => {
  const apps = useLoaderData();
  const totalReview = apps
    .map((app) => Number(app.reviews))
    .reduce((acc, current) => acc + current, 0);
  const totalDownload = apps
    .map((app) => Number(app.downloads))
    .reduce((acc, current) => acc + current, 0);

  return (
    <div className="">
      <Hero></Hero>
      <Statistic
        totalReview={totalReview}
        totalDownload={totalDownload}
      ></Statistic>
      <Suspense
        className=""
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <TopApps apps={apps}></TopApps>
      </Suspense>
    </div>
  );
};

export default Home;
