import { Suspense } from "react";
import { useLoaderData } from "react-router";
import Hero from "../../components/Header/Hero";
import Statistic from "../../components/Statistic/Statistic";
import TopApps from "../TopApps/TopApps";

const Home = () => {
  const apps = useLoaderData();
  return (
    <div className="">
      <Hero></Hero>
      <Statistic></Statistic>
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
