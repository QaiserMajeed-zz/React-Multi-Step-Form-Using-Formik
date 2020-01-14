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
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import NavbarComponent from "./common/NavBar";
import AuthService from './../services/Auth'
import * as toastr from 'toastr';

class Register extends Component {
    saveAndContinue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        // const { values } = this.props;
        return (
            <Fragment>
                <NavbarComponent {...this.props} />
                <div class="d-flex align-items-center flex-column  h-100 text-white" >
                    <h3 className="display-4" style={{ marginTop:'50px', padding: '5px', color: 'white', fontSize: '40px',marginRight:'180px' }}>Create An Account </h3>
                    <div className="col-md-4" style={{ paddingTop: '15px', borderRadius: '10px' }} >
                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                email: '',
                                username: '',
                                password: '',
                                confirmPassword: '',
                                mobile_number: ''
                            }}
                            validationSchema={Yup.object().shape({
                                first_name: Yup.string()
                                    .required('First Name is required'),
                                // last_name: Yup.string()
                                //     .required('Last Name is required'),
                                username: Yup.string()
                                    .required('Username is required'),
                                email: Yup.string()
                                    .email('Email is invalid')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .min(6, 'Password must be at least 6 characters')
                                    .required('Password is required'),
                                confirmPassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                    .required('Confirm Password is required'),
                                // mobile_number: Yup.string()
                                //     .required('Mobile Number is required'),
                            })}
                            onSubmit={fields => {

                                let auth = new AuthService();
                                auth.register(fields).then(response => {
                                    if (!response.is_error) {
                                        toastr.success(response.content.message.toString());
                                        this.props.history.push("/login");
                                        
                                       
                                    }
                                    else{
                                        toastr.error(response.error_content.error.toString());
                                    }
                                })
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                   

                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="first_name" placeholder="Enter First Name" type="text" className={'form-control-transparent' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    {/* <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="last_name" placeholder="Last Name" type="text" className={'form-control-transparent' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup> */}
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="email" placeholder="Email/Phone Number" type="text" className={'form-control-transparent' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="username" placeholder="username" type="text" className={'form-control-transparent' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="password" type="password" placeholder="Password" className={'form-control-transparent' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="confirmPassword" type="password" placeholder='Confirm Password' className={'form-control-transparent' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>
                                    {/* <FormGroup>
                                        <Col sm="12" md={{ size: 12 }}>
                                            <Field name="mobile_number" type="text" placeholder='Mobile Number' className={'form-control-transparent' + (errors.mobile_number && touched.mobile_number ? ' is-invalid' : '')} />
                                            <ErrorMessage name="mobile_number" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup> */}
                                    <FormGroup>
                                        <Button type="submit" className="login-button float-right btn btn-secondary">
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
