import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

interface Props {
  colour?: string;
  label: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

const input = (props: Props) => {
  const newColor = props.colour ? props.colour : "blue";

  return (
    <div className="m-2 relative">
      <input
        className={`${styles.input} border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600`}
        id="input"
        type="text"
        autoFocus
        onChange={props.changeHandler}
      />
      <label
        htmlFor="label"
        className={`${styles.label} absolute mb-0 -mt-2 pt-2 pl-2 leading-tighter text-gray-400 text-base mt-5 cursor-text`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default input;
