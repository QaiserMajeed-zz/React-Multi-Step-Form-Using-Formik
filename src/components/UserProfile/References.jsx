import React, { Fragment } from "react";
import { FormGroup, Col, Row, Label } from "reactstrap";
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {
  Field,
  FieldArray,
  ErrorMessage,
} from 'formik';
import { UncontrolledCollapse, Button } from 'reactstrap';
export const References = ({ values, errors, touched, props }) =>
  (
    <Fragment>

      <FormGroup>
        <Col sm="12" md={{ size: 9, offset: 4 }}>
          <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faUser} />
        </Col>
      </FormGroup>
      {/* {values.employmentReferences.length > 1 && <Example values={values.employmentReferences} />} */}
      <FieldArray
        name="employmentReferences"
        render={({ insert, remove, push }) => (
          <div>
            {values.employmentReferences.length > 0 &&
              values.employmentReferences.map((history, index) => (
                (index + 1 == values.employmentReferences.length) ?
                  <Fragment key={index}>
                    <FormGroup>
                      <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Field name={`employmentReferences.${index}.employerName`} placeholder="Name" type="text" className={'form-control' + (errors.employerName && touched.employerName ? ' is-invalid' : '')} />
                        <ErrorMessage name={`employmentReferences.${index}.employerName`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Field name={`employmentReferences.${index}.employerTelNumber`} placeholder="Telephone#" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`employmentReferences.${index}.employerTelNumber`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Field name={`employmentReferences.${index}.employerAddress`} placeholder="Employer Address" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                        <ErrorMessage name={`employmentReferences.${index}.employerAddress`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Field name={`employmentReferences.${index}.employerEmail`} placeholder="Employer Email" type="text" className={'form-control' + (errors.employerEmail && touched.employerEmail ? ' is-invalid' : '')} />
                        <ErrorMessage name={`employmentReferences.${index}.employerEmail`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>

                  </Fragment>

                  :                   //LASTINDEX this is not to included the in the header card
                  (<Fragment key={index}>
                    <FormGroup className='float-right'>

                      <FontAwesomeIcon
                        onClick={() => remove(index)
                        } style={{ 'color': "#007bff" }} size={'1x'} icon={faTrash} />

                    </FormGroup>

                    <CardHeader color="blue" id={`toggler${index}`} style={{ marginBottom: '1rem' }}>
                      {values.employmentReferences[index].employerName}
                    </CardHeader>
                    <UncontrolledCollapse toggler={`#toggler${index}`}>
                      <Card>
                        <CardBody>

                          <FormGroup>
                            <Col sm="12" md={{ size: 10, offset: 1 }}>
                              <Field name={`employmentReferences.${index}.employerName`} placeholder="Name" type="text" className={'form-control' + (errors.employerName && touched.employerName ? ' is-invalid' : '')} />
                              <ErrorMessage name={`employmentReferences.${index}.employerName`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 10, offset: 1 }}>
                              <Field name={`employmentReferences.${index}.employerTelNumber`} placeholder="Telephone#" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`employmentReferences.${index}.employerTelNumber`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 10, offset: 1 }}>
                              <Field name={`employmentReferences.${index}.employerAddress`} placeholder="Employer Address" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                              <ErrorMessage name={`employmentReferences.${index}.employerAddress`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 10, offset: 1 }}>
                              <Field name={`employmentReferences.${index}.employerEmail`} placeholder="Employer Email" type="text" className={'form-control' + (errors.employerEmail && touched.employerEmail ? ' is-invalid' : '')} />
                              <ErrorMessage name={`employmentReferences.${index}.employerEmail`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </Fragment>)

              ))}
            <div className="row">

              <FontAwesomeIcon style={{ 'color': "#007bff",margin:'auto' }} size={'2x'} onClick={() => {
                push({
                  employerName: '',
                  employerTelNumber: '',
                  employerAddress: '',
                  employerEmail: '',
                })
              }} icon={faPlusSquare} />
            </div>
          </div>

        )}
      />

    </Fragment>



  );



const Example = (index, values, errors, touched, props) => (


  <Fragment>
    {

      values.values.map((history, index) => (
        index + 1 != values.values.length ?
          (<Fragment key={index}>
            <CardHeader color="blue" id={`toggler`} style={{ marginBottom: '1rem' }}>
              {history.employerName}
            </CardHeader>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  {history.employerName}
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </Fragment>) : ''
      ))})
  </Fragment>



);
const FormArray = (index, employmentReferences, errors, touched, props) => (


  <Fragment key={index}>



    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name={`employmentReferences.${index}.employerName`} placeholder="Name" type="text" className={'form-control' + (errors.employerName && touched.employerName ? ' is-invalid' : '')} />
        <ErrorMessage name={`employmentReferences.${index}.employerName`} component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name={`employmentReferences.${index}.employerTelNumber`} placeholder="Telephone#" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
        <ErrorMessage name={`employmentReferences.${index}.employerTelNumber`} component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name={`employmentReferences.${index}.employerAddress`} placeholder="Employer Address" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
        <ErrorMessage name={`employmentReferences.${index}.employerAddress`} component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name={`employmentReferences.${index}.employerEmail`} placeholder="Employer Email" type="text" className={'form-control' + (errors.employerEmail && touched.employerEmail ? ' is-invalid' : '')} />
        <ErrorMessage name={`employmentReferences.${index}.employerEmail`} component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>

  </Fragment>



);

