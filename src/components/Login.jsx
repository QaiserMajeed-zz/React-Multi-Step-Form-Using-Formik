import React, { Component, Fragment } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import ReactFlagsSelect from 'react-flags-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import * as toastr from 'toastr';

import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import NavbarComponent from "./common/NavBar";
import AuthService from './../services/Auth'

class UserDetails extends Component {
    saveAndContinue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        // const { values } = this.props;
        return (
            <Fragment>
                <NavbarComponent {...this.props} />
                <div className="d-flex align-items-center flex-column  h-100 text-white" >
                    <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '50px' }}>Login</h1>
                    <div className="col-md-4" style={{ paddingTop: '15px', borderRadius: '10px' }} >
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            validationSchema={Yup.object().shape({
                                username: Yup.string()
                                    .required('User Name is required'),
                                password: Yup.string()
                                    .min(6, 'Password must be at least 6 characters')
                                    .required('Password is required'),
                            })}
                            onSubmit={fields => {

                                let auth = new AuthService();


                                auth.signIn(fields).then(response => {
                                    if (!response.is_error) {
                                        toastr.success(response.content.message.toString());
                                        this.props.history.push("/profile",{ response: response.content.message });
                                        
                                    }
                                    else{
                                        debugger
                                        toastr.error(response.error_content.error.toString());
                                    }
                                })
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <FormGroup>
                                        <Col sm="12" md={{ size: 9, offset: 5 }}>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12, offset: 0 }}>
                                            <Field name="username" placeholder="User Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12, offset: 0 }}>
                                            <Field name="password" type="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button type="Submit" className="custom-button float-right ">
                                            Log In

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

export default UserDetails;
