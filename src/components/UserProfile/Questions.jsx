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
          name="services"
          options={values.services}
          component={SelectField}
          onChange={(s) => values.questions = qs.fetchQuestionByServiceId(s.label)}
        />
        {/* <ErrorMessage name="lastName" component="div" className="invalid-feedback" /> */}
      </Col>
    </FormGroup>

    {values.questions.length > 0 &&

      <MCQWizard
        values={values.questions}
        errors={errors}
        touched={touched}
      />

    }


  </Fragment>)
}
export default QuestionsComponent;