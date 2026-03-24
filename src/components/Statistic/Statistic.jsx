import { formatCount } from "./../../utilities/utilities";
import "./Statistic.css";

const Statistic = ({ totalReview, totalDownload }) => {
  return (
    <>
      <div className="statistic-section py-20">
        <div className="max-w-100 px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto text-center">
          <h2 className="text-[35px] lg:text-[48px] font-bold mb-10">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid gap-20 xl:gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {/* Total Download */}
            <div className="lg:col-span-2 xl:col-span-1">
              <p>Total Downloads</p>
              <p className="text-[64px] font-extrabold xl:my-2.5">
                {formatCount(totalDownload)}
              </p>
              <p>21% more than last month</p>
            </div>

            {/* Total Review */}
            <div className="">
              <p>Total Review</p>
              <p className="text-[64px] font-extrabold xl:my-2.5">
                {formatCount(totalReview)}
              </p>
              <p>46% more than last month</p>
            </div>

            {/* Active Apps */}
            <div className="">
              <p>Active Apps</p>
              <p className="text-[64px] font-extrabold xl:my-2.5">132+</p>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
