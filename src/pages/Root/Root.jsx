import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Header/NavBar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      {/* {isNavigating && <GlobalSpinner />} */}
      <NavBar></NavBar>
      {isNavigating && (
        <span className="loading loading-ring loading-xl"></span>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
