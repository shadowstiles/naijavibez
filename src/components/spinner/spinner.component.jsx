import MySpinner from "../assets/icons.svg";

import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <svg>
        <use href={`${MySpinner}#icon-loader`}></use>
      </svg>
    </div>
  );
};

export default Spinner;
