import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Header/NavBar";
const Root = () => {
  return (
    <>
      <NavBar></NavBar>

      {/* Here is the outlet */}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Root;
