import React, { Component, Fragment } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import {useHistory} from "react-router-dom";
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import NavbarComponent from "./common/NavBar";

class Register extends Component {
    saveAndContinue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        // const { values } = this.props;
        return (
            <Fragment>
                <NavbarComponent />
                <div class="d-flex align-items-center flex-column  h-100 text-white" >
                    <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '50px' }}>Create An Account </h1>
                    <div className="col-md-4" style={{ paddingTop: '15px', borderRadius: '10px' }} >
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
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
                                debugger
                                this.props.history.push("/login");

                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 9, offset: 5 }}>
                                            <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} onClick={this.saveAndContinue} icon={faUserPlus} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="firstName" placeholder="First Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="lastName" placeholder="Last Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="email" placeholder="Email" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="password" type="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="confirmPassword" type="password" placeholder='Confirm Password' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button type="submit" className="custom-button" style={{ float: 'right',backgroundColor:'white'}}>
                                            Sign Up

                                        </Button>

                                    </FormGroup>
                                </Form>
                            )}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Register;
