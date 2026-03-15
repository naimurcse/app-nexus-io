import HeroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center mt-[80px]">
        <h1 className="text-[#001931] font-bold text-6xl ">
          We Build <br /> <span>Productive</span>Apps
        </h1>
        <p className="text-[#627382] max-w-4xl mx-auto my-6 text-xl">
          At AppNexus.IO, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div>
        <img className="mx-auto w-3xl" src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
