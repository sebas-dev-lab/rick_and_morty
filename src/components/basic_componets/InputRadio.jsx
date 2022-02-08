import React from "react";
import PropTypes from "prop-types";

/**
 *
 *
 * @component
 * @example
 * const obj = {  checked, value,name,onChange,text,labelClassName,inputClassName,}
 *
 * return (
 *  <InputRadio {...obj} />
 * )
 *
 */

const InputRadio = ({
  checked,
  value,
  name,
  onChange,
  text,
  labelClassName,
  inputClassName,
}) => {
  return (
    <label className={labelClassName}>
      <input
        type="radio"
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
        className={inputClassName}
      />
      {text}
    </label>
  );
};
InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputRadio;
