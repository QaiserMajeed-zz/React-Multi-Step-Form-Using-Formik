import React, { Component, Fragment, useState, useEffect } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {
    Formik,
  
  
    Form,
    Field,
  
    ErrorMessage,
  } from 'formik';

const GeneralQuestions = ({ values, errors, touched }) => (
    <Fragment>
        {values.general_Questions.map((obj, index) => {
            return (
                <Col sm="12" >
                    <div className="quiz">
                        <div className="output">
                            <h3 style={{ textAlign: 'center' }}>{`Question ${index +1}`} </h3>
                            <p>{obj.question}</p>
                            <Field name={`general_Questions${index}.Answer`} placeholder="Answer" type="text" className={'form-control'} />
                            <ErrorMessage name={`general_Questions${index}.Answer`} component="div" className="invalid-feedback" />
                        </div>
                    </div>
                </Col >)
        })}

    </Fragment>
)
export default GeneralQuestions;