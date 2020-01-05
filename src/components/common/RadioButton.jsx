import * as React from "React";

import classNames from "classnames";

export const RadioButton = ({
    //@ts-ignore
    field: { name, value, onChange, onBlur },
    //@ts-ignore
    id,
    //@ts-ignore
    label,
    //@ts-ignore
    className,
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
          onBlur={onBlur}
          className={classNames("radio-button")}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };