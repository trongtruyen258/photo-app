import ButtonComponent from "../../../../components/button";
import "./photoCard.scss";

export default function PhotoCard({
  photoCard,
  category,
  clickDelete,
  clickEdit,
}) {
  return (
    <div className="photo-card">
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
