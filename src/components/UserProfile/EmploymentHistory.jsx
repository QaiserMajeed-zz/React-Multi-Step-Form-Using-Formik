import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAmbulance, faHistory } from '@fortawesome/free-solid-svg-icons';
import {
  Formik,


  Form,
  Field,

  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";

const EmpHistory = ({ values, errors, touched }) =>
  (
    <Fragment>

      <FormGroup>
        <Col sm="12" md={{ size: 9, offset: 4 }}>
          <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faHistory} />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Field name="employerName" placeholder="Name" type="text" className={'form-control' + (errors.employerName && touched.employerName ? ' is-invalid' : '')} />
          <ErrorMessage name="employerName" component="div" className="invalid-feedback" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Field name="employerTelNumber" placeholder="Telephone#" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
          <ErrorMessage name="employerTelNumber" component="div" className="invalid-feedback" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Field name="employerAddress" placeholder="Employer Address" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
          <ErrorMessage name="employerAddress" component="div" className="invalid-feedback" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Field name="employerEmail" placeholder="Employer Email" type="text" className={'form-control' + (errors.employerEmail && touched.employerEmail ? ' is-invalid' : '')} />
          <ErrorMessage name="employerEmail" component="div" className="invalid-feedback" />
        </Col>
      </FormGroup>
      

    </Fragment>
  );




