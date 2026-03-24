import { useNavigate } from "react-router";
import notFoundImage from "../../assets/App-Error.png";

const AppNotFound = ({ Message }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto flex text-center justify-center py-4">
      <div>
        <img className="w-50 md:w-87.5 mx-auto" src={notFoundImage} alt="" />

        {Message}

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

export default AppNotFound;
