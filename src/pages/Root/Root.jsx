import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Header/NavBar";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
