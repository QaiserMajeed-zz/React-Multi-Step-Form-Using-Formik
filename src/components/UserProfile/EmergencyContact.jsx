import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import {
  Formik,


  Form,
  Field,

  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";

const EmergencyContact = ({ values, errors, touched }) => (

  <Fragment>
    <FormGroup>
      <Col sm="12" md={{ size: 9, offset: 4 }}>
        <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faAmbulance} />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="emergencyFullName" placeholder="Full Name" type="text" className={'form-control' + (errors.emergencyFullName && touched.emergencyFullName ? ' is-invalid' : '')} />
        <ErrorMessage name="emergencyFullName" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="relation" placeholder="Relation" type="text" className={'form-control' + (errors.relation && touched.relation ? ' is-invalid' : '')} />
        <ErrorMessage name="relation" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="emergencyTelephone" placeholder="Phone Number" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
        <ErrorMessage name="email" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>

  </Fragment>
);


export default EmergencyContact;
