import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#001931]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-20 text-neutral-content pt-20 pb-10 border-b border-b-cyan-950">
          <div className="col-span-6">
            <h2 className="text-4xl font-light leading-12 mb-10">
              Discover Every App You Need, All in One Place.
            </h2>

            {/* Logo */}
            <Link to="/" className="flex justify-start items-center pb-7">
              <img
                className="w-12.5"
                src={Logo}
                alt="AppNexus.IO"
                style={{
                  animation: "spin 10s linear infinite",
                }}
              />

              <h1 className="text-5xl font-extrabold ml-5">AppNexus.IO</h1>
            </Link>
          </div>

          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="footer-title">Location</h3>
              <address>Mirpur, Dhaka, Bangladesh-1216</address>
            </div>
            <div>
              <h3 className="footer-title">Social Media</h3>
              <ul className="flex gap-4">
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

          <div className="col-span-3 flex flex-col justify-between text-end">
            <div>
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
        <div className="text-white font-light opacity-70 max-w-7xl mx-auto flex justify-between pt-4 pb-20">
          <p>© 2026 AppNexus.IO – Apps. All rights reserved.</p>
          <div className="flex gap-6">
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
