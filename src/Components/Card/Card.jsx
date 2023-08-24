/* eslint-disable react/prop-types */
import style from "./Card.module.css"

function Card(props) {
  return (
    <div className={style.div}>

      <h2 className={style.title}>{props.title ?? ""}</h2>
      <p>{props.description}</p>

      <img className={style.img} src={props.imgUrl}></img>

    </div>
  );
}

export default Card;