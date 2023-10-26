import { useSelector } from "react-redux";
import ButtonComponent from "../../../../components/button";
import "./photoCard.scss";

export default function PhotoCard({
  photoCard,
  category,
  clickDelete,
  clickEdit,
}) {
  const { themeDark } = useSelector((state) => state.photo);

  return (
    <div className={`photo-card ${themeDark ? "photo-card-theme-dark" : ""}`}>
      <div className="photo">
        <img src={photoCard.imgUrl} alt="card" />
      </div>
      <div className="remove-edit">
        <div>
          <ButtonComponent
            title={"Delete"}
            color={"danger"}
            handleClick={clickDelete}
          />
        </div>
        <div>
          <ButtonComponent
            title={"Edit"}
            color={"warning"}
            handleClick={clickEdit}
          />
        </div>
      </div>
      <div className="photo-info">
        <p>{photoCard.title}</p>
        <p>{category()}</p>
      </div>
    </div>
  );
}
