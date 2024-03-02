import RestroCart from "./RestroCart";
import { useEffect, useState } from "react";
//import reslist from "./utils/mockdata";
//import Shimmer from "./Shimmer";

const Body1 = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //copy of the filtrered rest
  const [filteredRest, setfilteredRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "Priya"
    );

    setlistOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // return listOfRest.length === 0 ? (
  // <Shimmer />
  // ) :
  return (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            className="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(searchInput);
              const filteredresName = listOfRest?.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setlistOfRest(filteredresName); //update setlistOfRest into FilteredresName
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRest?.filter((res) => res.AvgRating > 4);
            // console.log(filteredlist);
            setlistOfRest(filteredlist);
          }}
        >
          top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestroCart resData={reslist[0]} /> //js object
        <RestroCart resData={reslist[1]} /> //js object
        <RestroCart resData={reslist[2]} /> //js object
        <RestroCart resData={reslist[3]} /> //js object */}
        {/* //========another way is map will loop over all the restaurant */}
        {filteredRest?.map((resturant) => (
          <RestroCart key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body1;
