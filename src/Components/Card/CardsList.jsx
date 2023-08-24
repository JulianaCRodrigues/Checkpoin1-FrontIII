/* eslint-disable react/prop-types */
import style from './CardsList.module.css'

function CardsList(props) {
  return ( 
    <div  className={style.div}>
          {props.children}
    </div>
   );
}

export default CardsList;