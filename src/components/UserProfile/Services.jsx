import React, { Component, Fragment, useState } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MCQWizard from './MCQWizard';
import QuestionsService from '../../services/Questions'

import {
  Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import { SelectField } from "../common/SelectField";

function handleChange(setFieldValue, services, onServiceChange) {


}

var qs = new QuestionsService();
function QuestionsComponent({ values, errors, touched, onServiceChange, setFieldValue }) {

  return (<Fragment>

    <FormGroup>
      <Col sm="12" md={{ size: 9, offset: 4 }}>
        <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faCog} />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>

        <Field
          placeholder="Select Service"
          searchable={true}
          searchPlaceholder="Select Service"
          name="selectedServices"
          value={values.selectedServices}
          options={values.services}
          component={SelectField}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(value) => { setFieldValue("selectedServices", value); onServiceChange(value) }}
         // onChange={(value)=>{handleChange(setFieldValue,value,onServiceChange)}}
          isMulti={true}
        />
        {/* <ErrorMessage name="lastName" component="div" className="invalid-feedback" /> */}
      </Col>
    </FormGroup>




  </Fragment>)
}
export default QuestionsComponent;