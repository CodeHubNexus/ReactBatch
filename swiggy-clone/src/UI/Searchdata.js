const SearchData = ({ res, navigate }) => {
  return (
    <div
      className="searchedData"
      key={res.info.id}
      onClick={() => navigate(`/restaurant/${res?.info?.id}`)}
    >
      <img
        src={`images/${res.info.cloudinaryImageId}.avif`}
        alt={res.info.name}
      />
      <div>
        <p>{res.info.name}</p>
      </div>
    </div>
  );
};
export default SearchData;
