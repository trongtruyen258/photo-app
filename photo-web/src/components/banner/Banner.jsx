import "./banner.scss";

export default function Banner({ title, imgUrl }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgUrl})` }}>
      <p>{title}</p>
    </div>
  );
}
