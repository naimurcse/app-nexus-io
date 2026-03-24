import { FaAppStore, FaGithub } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { MdInstallDesktop } from "react-icons/md";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const links = (
    <>
      <NavLink className="flex items-center gap-1" to="/">
        <HiOutlineHome className="text-lg" /> Home
      </NavLink>
      <NavLink to="/apps" className="flex items-center gap-1">
        <FaAppStore className="text-lg" /> Apps
      </NavLink>
      <NavLink to="/installation" className="flex items-center gap-1">
        <MdInstallDesktop className="text-lg" /> Installation
      </NavLink>
    </>
  );
  return (
    <>
      <div className=" bg-base-100 shadow-sm">
        <div className="navbar  lg:max-w-4xl xl:max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2 underline-offset-0"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="btn px-0 lg:px-2 btn-ghost text-lg lg:text-xl"
            >
              <img className="w-6" src={logo} alt="" />
              AppNexus.IO
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-5 text-lg gap-10 [&_a]:hover:text-[#812ce2] ">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn gradient-btn rounded-md text-white text-[16px] font-semibold"
              href="https://github.com/naimurcse"
              target="_blank"
            >
              {" "}
              <FaGithub /> <span className="hidden md:block">Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
