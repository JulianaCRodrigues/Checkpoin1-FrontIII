/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import style from "./Input.module.css"

function Input({ title, type, value, fnOnChange, fnOnKeyUp }) {
  return (
    <>
      <label className={style.label}>{title ?? "Digite o Nome do Filme"}</label>
      <input
        type={type ?? "text"}
        value={value}
        onChange={fnOnChange}
        fnOnKeyUp={fnOnKeyUp}
      />
    </>
  );
}

export default Input;