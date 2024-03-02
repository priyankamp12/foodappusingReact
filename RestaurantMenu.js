import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//import { MENU_API_URL } from "./utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/restaurants/chinese-wok-season-mall-magarpatta-pune-63455"
    );
    const json = await data.json();
    console.log("JSON DATA: " + json);
    setresInfo(json.data);
    console.log(resInfo);
  };

  const { name, cuisines, areaName, avgRating, deliveryTime } =
    resInfo?.cards[0]?.card?.card?.info;

  //   if (restInfo === null) return <Shimmer />;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <h2>{cuisines}</h2>
      <h3>{avgRating}</h3>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantMenu;
