import { CDN_URL } from "./utils/constant";
const RestroCart = (props) => {
  console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "gray" }}>
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-Logo "
      ></img>

      <h3 className="font-bold italic">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestroCart;
