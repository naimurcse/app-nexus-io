import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import HeroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-[#001931] font-bold text-6xl leading-[1.1]">
          We Build <br /> <span className="gradient-text">Productive</span> Apps
        </h1>
        <p className="text-[#627382] max-w-5xl mx-auto my-6 text-xl leading-[1.5]">
          At AppNexus.IO, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-5 my-[40px]">
          <button className="btn btn-xl text-black border-[#e5e5e5]">
            <img className="mr-1" src={googlePlay} alt="" />
            Google Play
          </button>
          <button className="btn btn-xl text-black border-[#e5e5e5]">
            <img className="mr-1" src={appStore} alt="" />
            Apple Store
          </button>
        </div>
      </div>
      <div>
        <img className="mx-auto w-4xl" src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
