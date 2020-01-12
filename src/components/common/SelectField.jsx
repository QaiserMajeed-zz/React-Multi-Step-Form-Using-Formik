import React, { Component, Fragment } from "react";
import Select from 'react-select';


export const SelectField = ({
  options,
  field,
  form,
  isMulti,
  isDisabled,
  defaultInputValue,
  defaultValue,
  placeholder,
  value,
  onChange,
  defaultText,
  onBlur,
  className,
  styles
  // isClearable
}) => (

    <Select
      options={options}
      name={field.name}
      onChange={onChange}
      isMulti={isMulti}
      onBlur={onBlur ? onBlur : field.onBlur}
      isDisabled={isDisabled}
      defaultInputValue={defaultInputValue}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={className}
      styles={styles}

    // isClearable={true}
    //  isSearchable={true}
    />
  );
