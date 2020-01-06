import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import {
  Formik,


  Form,
  Field,

  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";

class References extends Component {
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
        <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '30px' }}>References</h1>
        <div className="col-md-4" style={{ backgroundColor: 'white', paddingTop: '15px', borderRadius: '10px' }} >
          <Formik
            initialValues={{
              employerName: '',
              telNumber: '',
              address: '',
              email: '',

            }}
            validationSchema={Yup.object().shape({
              employerName: Yup.string()
                .required('First Name is required'),
              telNumber: Yup.string()
                .required('Last Name is required'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              address: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')

            })}
            onSubmit={fields => {
              alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <FormGroup>
                  <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'5x'} icon={faUserFriends} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Field name="employerName" placeholder="Employer Name" type="text" className={'form-control' + (errors.employerName && touched.employerName ? ' is-invalid' : '')} />
                    <ErrorMessage name="employerName" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Field name="telNumber" placeholder="Telephone #" type="text" className={'form-control' + (errors.telNumber && touched.telNumber ? ' is-invalid' : '')} />
                    <ErrorMessage name="telNumber" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Field name="email" placeholder="Email" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Field name="address" placeholder="Address" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                    <ErrorMessage name="address" component="div" className="invalid-feedback" />
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

export default References;
