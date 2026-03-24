const SearchNotFound = () => {
  return (
    <>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mt-6 md:mt-10">
        Oops, No apps are found!
      </h2>

      {/* Sub-heading */}
      <p className="text-[#627382] mb-8 mt-3">Please try with another key!</p>
    </>
  );
};

export default SearchNotFound;
