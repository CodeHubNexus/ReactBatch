import { useContext, useEffect, useState } from "react";
import "./../Style/search.css";
import { FetchContext } from "../UI/fetchContext";
import PopularRestaurant from "../UI/PopularRestaurant";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchData from "../UI/Searchdata";

const Search = () => {
  const { resData } = useContext(FetchContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  // This is just to put the query
  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setInputValue(queryParam);
    }
  }, [searchParams]);

  // just to check filtered restaurant and isEmpty or not
  useEffect(() => {
    if (inputValue === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    navigate(`?query=${inputValue}`);
    if (inputValue.trim() !== "") {
      const filtered = resData.filter((restaurant) => {
        return restaurant.info.name
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
      setFilteredRestaurant(filtered);
    } else {
      setFilteredRestaurant([]);
    }
  }, [inputValue, navigate]);

  const items = resData.slice(0, 8);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCuisineClick = (c) => setInputValue(c);

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="searchField"
          placeholder="Search Restaurants and Food"
        />
      </div>

      {isEmpty && (
        <>
          <h3>Popular Restaurants</h3>
          <div
            className="searCuisineContainer
"
          >
            {items.map((res) => {
              return (
                <PopularRestaurant
                  res={res}
                  handleCuisineClick={handleCuisineClick}
                />
              );
            })}
          </div>
        </>
      )}
      {!isEmpty && filteredRestaurant.length === 0 ? (
        <div className="searchNotFpound">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <div className="searched">
          {filteredRestaurant.map((res) => {
            return <SearchData res={res} navigate={navigate} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
