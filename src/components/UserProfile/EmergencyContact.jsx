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

class EmergencyContact extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    return (
      <Fragment>
        <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '30px' }}>Emergency Contact</h1>
        <div className="col-md-4" style={{ backgroundColor: 'white', paddingTop: '15px', borderRadius: '10px' }} >
          <Formik
            initialValues={{
              fullName: '',
              relation: '',
              phoneNo: '',
              
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .required('First Name is required'),
              lastName: Yup.string()
                .required('Last Name is required'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
            })}
            onSubmit={fields => {
              alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <FormGroup>
                  <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'5x'} icon={faAmbulance} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="fullName" placeholder="Full Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                    <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="lastName" placeholder="Last Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="phoneNo" placeholder="Phone Number" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <button className="float-right border-0 bg-transparent" >
                    <Label>Next</Label>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} onClick={this.saveAndContinue} icon={faArrowRight} />
                  </button>
                  <button className="float-left border-0 bg-transparent" >
                    
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} onClick={this.back} icon={faArrowLeft} />
                    <Label>Back</Label>
                  </button>

                </FormGroup>
              </Form>
            )}
          />
        </div>
      </Fragment>
    );
  }
}

export default EmergencyContact;
