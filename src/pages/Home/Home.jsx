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
      <TopApps apps={apps}></TopApps>
    </div>
  );
};

export default Home;
