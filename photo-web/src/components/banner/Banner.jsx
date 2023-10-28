import { useSelector } from "react-redux";
import "./banner.scss";

export default function Banner({ title, imgUrl }) {
  const { themeDark } = useSelector((state) => state.photo);

  return (
    <div className={`banner ${themeDark? "banner-theme-dark":""}`} style={{ backgroundImage: `url(${imgUrl})` }}>
      <p>{title}</p>
    </div>
  );
}
