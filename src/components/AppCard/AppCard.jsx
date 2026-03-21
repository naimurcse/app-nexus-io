const AppCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <div>
      <div className="card bg-base-100 w-76 shadow-lg">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-50 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p>{downloads}</p>
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
