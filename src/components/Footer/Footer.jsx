import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#001931] text-center lg:text-left">
        {/* Upper Part */}
        <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto grid-cols-1 lg:grid lg:grid-cols-12 gap-20 text-neutral-content pt-12 lg:pt-20 pb-10 border-b border-b-cyan-950">
          <div className="lg:col-span-12 xl:col-span-6 mb-10 lg:mb-0">
            <h2 className="lg:text-2xl text-center xl:text-start md:text-2xl xl:text-4xl xl:font-light lg:font-semibold lg:leading-12 mb-5 md:mb-10 lg:mb-12 xl:mb-10 ">
              Discover Every App You Need, All in One Place.
            </h2>

            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col xl:flex-row justify-start items-center xl:pb-7"
            >
              <img
                className="w-10 md:w-20 lg:w-20 xl:w-12.5 mb-2 md:mb-4 xl:mb-0 mt-5 md:mt-0"
                src={Logo}
                alt="AppNexus.IO"
                style={{
                  animation: "spin 10s linear infinite",
                }}
              />

              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold xl:ml-5">
                AppNexus.IO
              </h1>
            </Link>
          </div>

          <div className="lg:col-span-6  xl:col-span-3 flex flex-col justify-between ">
            <div className="mb-10 lg:mb-0">
              <h3 className="footer-title">Location</h3>
              <address>Mirpur, Dhaka, Bangladesh-1216</address>
            </div>
            <div className="mb-10 lg:mb-0">
              <h3 className="footer-title mb-4">Social Media</h3>
              <ul className="flex justify-center lg:justify-start gap-4">
                <li className="border border-[#632ee3] transition-all duration-400 hover:bg-[#632ee3] p-3 rounded-4xl text-lg">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="border border-[#632ee3]  transition-all duration-400  hover:bg-[#632ee3] p-3 rounded-4xl text-lg">
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li className="border border-[#632ee3]  transition-all duration-400  hover:bg-[#632ee3] p-3 rounded-4xl text-lg">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className="border border-[#632ee3]  transition-all duration-400  hover:bg-[#632ee3] p-3 rounded-4xl text-lg">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6  xl:col-span-3 flex flex-col justify-between xl:text-end">
            <div className="mb-8">
              <h3 className="footer-title">Contact</h3>
              <p>Phone: +990235189</p>
              <p>Email: app-nexus-io@gmail.com</p>
            </div>
            <div>
              <h3 className="footer-title">Helpful Links</h3>
              <ul>
                <li>
                  <Link className="hover:text-[#975EEE]" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/apps"} className="hover:text-[#975EEE]">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link to={"/installation"} className="hover:text-[#975EEE]">
                    Installations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Part */}
        <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl text-white font-light opacity-70 mx-auto flex flex-col gap-3 lg:gap-0 items-center lg:items-start lg:flex-row justify-between pt-4 pb-10 lg:pb-20 text-sm lg:text-[16px]">
          <p>© 2026 AppNexus.IO – Apps. All rights reserved.</p>
          <div className="flex gap-6 ">
            <a href="#">License</a>
            <a href="#">Career </a>
            <a href="#">Popular Apps</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
