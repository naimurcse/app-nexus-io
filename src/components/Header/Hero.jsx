import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import HeroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <div className="text-center mt-10 lg:mt-20">
        <h1 className="text-[#001931] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]">
          We Build <br /> <span className="gradient-text">Productive</span> Apps
        </h1>
        <p className="text-[#627382] lg:max-w-3xl xl:max-w-5xl mx-auto my-6 text-md lg:text-xl leading-normal">
          At AppNexus.IO, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-5 my-10">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-xl app-web-btn bg-white md:rounded-lg text-black border-[#e5e5e5] hover:shadow-xl">
              <img className="mr-1" src={googlePlay} alt="" />
              Google Play
            </button>
          </a>

          <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
            <button className="app-web-btn btn btn-xl bg-white hover:bg-[#e5e5e5] md:rounded-lg text-black border-[#e5e5e5]  hover:shadow-xl">
              <img className="mr-1" src={appStore} alt="" />
              Apple Store
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          className="mx-auto md:w-xl lg:w-2xl xl:w-4xl"
          src={HeroImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
