/* eslint-disable react/prop-types */
import style from "./Card.module.css"

function Card(props) {
  return (
    <div className={style.div}>
      <div className={style.imgBook}>
        <img className={style.img} src={props.imgUrl}></img>
      </div>
      <div className={style.infoBook}>
        <h2 className={style.title}>{props.title ?? ""}</h2>
        <p>{props.description}</p>
      </div>

    </div>
  );
}

export default Card;