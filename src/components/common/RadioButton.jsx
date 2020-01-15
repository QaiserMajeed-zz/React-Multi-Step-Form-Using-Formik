import React, { Component, Fragment } from "react";

import classNames from "classnames";


  export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    onSelect,
    ...props
  }) => {
    return (
      <div>
        <input
          name={name}
          id={id}
          type="radio"
          value={id} // could be something else for output?
          checked={id === value}
          onChange={onChange}
          onClick={onSelect}
          className={className}
          onBlur={onBlur}
          {...props}
        />
        <label className="custom-control-label" htmlFor={id}>{label}</label>
      </div>
    );
  };