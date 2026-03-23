import { formatCount } from "./../../utilities/utilities";
import "./Statistic.css";

const Statistic = ({ totalReview, totalDownload }) => {
  return (
    <>
      <div className="statistic-section py-[80px]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[48px] font-bold mb-[40px]">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-3 ">
            <div>
              <p>Total Downloads</p>
              <p className="text-[64px] font-extrabold my-[10px]">
                {formatCount(totalDownload)}
              </p>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Review</p>
              <p className="text-[64px] font-extrabold my-[10px]">
                {formatCount(totalReview)}
              </p>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <p className="text-[64px] font-extrabold my-[10px]">132+</p>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
