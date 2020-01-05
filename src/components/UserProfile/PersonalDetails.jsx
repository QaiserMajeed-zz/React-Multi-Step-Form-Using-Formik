import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DateField } from '../common/DateField'
import * as moment from 'moment';
import ReactFlagsSelect from 'react-flags-select';

import {
  Formik,

  Form,
  Field,

  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import { SelectField } from "../common/SelectField";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//    // borderBottom: '1px dotted pink',
//     ///color: state.isSelected ? 'red' : 'blue',
//    // padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//    // width: 200,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }


class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };



  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (

      <Fragment>

        <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '30px' }}>Personal Information</h1>
        <div className="col-md-4" style={{ backgroundColor: 'white', paddingTop: '15px', borderRadius: '10px' }} >
          <Formik
            initialValues={{
              dateOfBirth: '',
              nationality: '',
              gender: '',
              home: '',
              mobile: '',
              currentAddress: '',
              postCode: ''
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
              this.saveAndContinue()
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <FormGroup>
                  <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'5x'} onClick={this.saveAndContinue} icon={faUserCircle} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field
                      name={'dateOfBirth'}
                      id={'dateOfBirth'}
                      className="form-control"
                      component={DateField}
                      placeholder="Date Of birth"
                      selected={values.DateFrom ? moment(values.DateFrom) : null}
                    />
                    {/* <ErrorMessage name="dateOfBirth" component={DatePicker} className="invalid-feedback" /> */}
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <ReactFlagsSelect
                    placeholder="Select Nationality"
                      searchable={true}
                      searchPlaceholder="Select Nationality"
                      name="nationality"
                     // optionsSize={12}
                      className="form-control" />
                    {/* <Field
                      name="nationality"
                      placeholder="nationality"
                      component={SelectField}
                      options={options}

                      placeholder="Select Nationality"
                    // styles={customStyles}

                    // className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}
                    /> */}
                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <select className="form-control" name="Gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="home" type="text" placeholder="Home" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                    <ErrorMessage name="home" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="mobile" type="text" placeholder='Mobile' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                    <ErrorMessage name="mobile" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="currentAddress" type="text" placeholder='Current Address' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                    <ErrorMessage name="currentAddress" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Field name="postCode" type="text" placeholder='Postal Code' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                    <ErrorMessage name="postCode" component="div" className="invalid-feedback" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <button type="submit" className="float-right border-0 bg-transparent" >
                    <Label>Next</Label>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} onClick={this.saveAndContinue} icon={faArrowRight} />
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

export default PersonalDetails;
