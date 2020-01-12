import React, { Component, Fragment, useState } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MCQWizard from './MCQWizard';
import QuestionsService from '../../services/Questions'

import {
  Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import { SelectField } from "../common/SelectField";



var qs = new QuestionsService();
function QuestionsComponent({ values, errors, touched, onServiceChange }) {

  return (<Fragment>

    <FormGroup>
      <Col sm="12" md={{ size: 9, offset: 4 }}>
        <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faAmbulance} />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>

        <Field
          placeholder="Select Service"
          searchable={true}
          searchPlaceholder="Select Service"
          name="selectedServices"
          options={values.services}
          component={SelectField}
          className="basic-multi-select"
          classNamePrefix="select"
           onChange={ onServiceChange}
          isMulti={true}
        />
        {/* <ErrorMessage name="lastName" component="div" className="invalid-feedback" /> */}
      </Col>
    </FormGroup>

   


  </Fragment>)
}
export default QuestionsComponent;