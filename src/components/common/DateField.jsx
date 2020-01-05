import React from "react";

import DatePicker from 'react-datepicker';
import moment from 'moment';


export const DateField = ({ field, form, value, selected, minDate, disabled, readOnly, onBlur,placeholder }) => (
  
  <DatePicker
    name={field.name}
    placeholderText={placeholder}
    value={value ? value : moment(field.value)}
    selected={selected ? selected : field.value}
    disabled={disabled}
    dateFormat="MM/DD/YYYY"
    className="form-control"
    readOnly={readOnly}
    showMonthDropdown
    showYearDropdown
    onChange={(val) => form.setFieldValue(field.name, val)}
    isClearable={false}
    minDate={minDate ? minDate : null}
    onBlur={onBlur}
    fixedHeight={true}
    //onChangeRaw={(e: any) => e.target.value.length >= 10 ? moment(moment(field.value).format("MM/DD/YYYY"), "MM/DD/YYYY", true).isValid() ? alert(moment(moment(e.target.value).format("MM/DD/YYYY"), "MM/DD/YYYY", true).isValid()) : alert('false') : ''}
  />
);
