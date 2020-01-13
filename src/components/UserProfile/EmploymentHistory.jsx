import React, { Component, Fragment } from "react";
import { Collapse, Col, FormGroup, CardBody, Card, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash, faPlusCircle, faPlusSquare, faArrowLeft, faArrowRight, faAmbulance, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FieldArray, Form, Field, ErrorMessage } from 'formik';
import { UncontrolledCollapse, Button } from 'reactstrap';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";

const EmpHistory = ({ values, errors, touched }) =>
  (
    <Fragment>

      <FormGroup>
        <Col sm="12" md={{ size: 9, offset: 4 }}>
          <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'2x'} icon={faHistory} />
        </Col>
      </FormGroup>
      <FieldArray
        name="empHistory"
        render={({ insert, remove, push }) => (
          <div>
            {values.empHistory.length > 0 &&
              values.empHistory.map((history, index) => (
                (index + 1 == values.empHistory.length) ?
                  <Fragment key={index}>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>

                        <Field name={`empHistory.${index}.empHistoryName`} placeholder="Employer Name" type="text" className={'form-control' + (errors.empHistoryName && touched.empHistoryName ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.empHistoryName`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.postiionTypeOfWork`} placeholder="Position/ Type of Work" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.postiionTypeOfWork`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.hoursWork`} placeholder="How many hours a week did you work" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.hoursWork`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.salaryPerHour`} placeholder=" What was your salary per hour?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.salaryPerHour`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.duration`} placeholder="How many premises a week did you clean/ work for?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.duration`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.startDate`} placeholder="When did you start work here?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.startDate`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <Field name={`empHistory.${index}.leaveDate`} placeholder="When did you leave?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                        <ErrorMessage name={`empHistory.${index}.leaveDate`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <textarea rows="3" name={`empHistory.${index}.reason`} placeholder="Reasons for Leaving" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} ></textarea>
                        <ErrorMessage name={`empHistory.${index}.reason`} component="div" className="invalid-feedback" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm="12" md={{ size: 12 }}>
                        <textarea rows="3" name={`empHistory.${index}.notes`} placeholder="Notes" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')}  ></textarea>
                        <ErrorMessage name={`empHistory.${index}.notes`} component="div" className="invalid-feedback" />
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
                      {values.empHistory[index].empHistoryName}
                    </CardHeader>
                    <UncontrolledCollapse toggler={`#toggler${index}`}>
                      <Card>
                        <CardBody>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>

                              <Field name={`empHistory.${index}.empHistoryName`} placeholder="Employer Name" type="text" className={'form-control' + (errors.empHistoryName && touched.empHistoryName ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.empHistoryName`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.postiionTypeOfWork`} placeholder="Position/ Type of Work" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.postiionTypeOfWork`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.hoursWork`} placeholder="How many hours a week did you work" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.hoursWork`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.salaryPerHour`} placeholder=" What was your salary per hour?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.salaryPerHour`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>

                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.duration`} placeholder="How many premises a week did you clean/ work for?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.duration`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>

                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.startDate`} placeholder="When did you start work here?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.startDate`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <Field name={`empHistory.${index}.leaveDate`} placeholder="When did you leave?" type="text" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} />
                              <ErrorMessage name={`empHistory.${index}.leaveDate`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>

                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <textarea rows="3" name={`empHistory.${index}.reason`} placeholder="Reasons for Leaving" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')} ></textarea>
                              <ErrorMessage name={`empHistory.${index}.reason`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>
                          <FormGroup>
                            <Col sm="12" md={{ size: 12 }}>
                              <textarea rows="3" name={`empHistory.${index}.notes`} placeholder="Notes" className={'form-control' + (errors.employerTelNumber && touched.employerTelNumber ? ' is-invalid' : '')}  ></textarea>
                              <ErrorMessage name={`empHistory.${index}.notes`} component="div" className="invalid-feedback" />
                            </Col>
                          </FormGroup>

                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </Fragment>)

              ))}
            <div className="row">

              <FontAwesomeIcon style={{ 'color': "#007bff", margin: 'auto' }} size={'2x'} onClick={() => {
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


export default EmpHistory;

