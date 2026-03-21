import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto flex text-center justify-center py-30">
      <div>
        <img className="w-[350px] mx-auto" src={errorImage} alt="" />
        <h2 className="text-4xl font-bold mt-10">Oops, page not found!</h2>
        <p className="text-[#627382] my-4">
          The page you are looking for is not available.
        </p>
        <button
          className="btn gradient-btn text-xl btn-lg"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
