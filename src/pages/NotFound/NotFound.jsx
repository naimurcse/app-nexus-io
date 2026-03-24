import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto flex text-center justify-center py-30">
      <div>
        {/* Image */}
        <img className="w-50 md:w-87.5 mx-auto" src={errorImage} alt="" />

        {/* Contents */}
        <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10">
          Oops, page not found!
        </h2>
        <p className="text-[#627382] mb-8 mt-3">
          The page you are looking for is not available.
        </p>

        {/* Button */}
        <button
          className="btn gradient-btn text-md md:text-xl md:btn-lg text-white"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
