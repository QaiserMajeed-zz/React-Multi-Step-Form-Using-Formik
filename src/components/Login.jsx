import React, { Component, Fragment } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import ReactFlagsSelect from 'react-flags-select';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import NavbarComponent from "./common/NavBar";

class UserDetails extends Component {
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
                    <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '50px' }}>Login</h1>
                    <div className="col-md-4" style={{ paddingTop: '15px', borderRadius: '10px' }} >
                        <Formik
                            initialValues={{
                                userName: '',
                                password: '',
                            }}
                            validationSchema={Yup.object().shape({
                                userName: Yup.string()
                                    .required('User Name is required'),
                                password: Yup.string()
                                    .min(6, 'Password must be at least 6 characters')
                                    .required('Password is required'),
                            })}
                            onSubmit={fields => {
                                debugger
                                // this.props.history('/profile')
                                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                this.props.history.push("/profile");

                            }}
                            render={({ errors, status, touched }) => (
                                <Form>


                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12, offset: 0 }}>
                                            <Field name="userName" placeholder="User Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm="12" md={{ size: 12, offset: 0 }}>
                                            <Field name="password" type="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button type="Submit" className="custom-button" style={{ float: 'right', backgroundColor: 'white' }}>
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
