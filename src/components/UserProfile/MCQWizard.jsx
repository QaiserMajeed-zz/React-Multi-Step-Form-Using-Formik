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

import { RadioButton } from '../common/RadioButton'


function MCQWizard(values, errors, touched) {
    const [questionNumber, setNumber] = useState(0);
    useEffect(() => {

    }, [setNumber]);
    return (
        <Col sm="12" >
            <div className="quiz">
                <div className="output">
                    <h3 style={{ textAlign: 'center' }}>{`Question ${questionNumber + 1}`} </h3>
                    <p>{values.values[questionNumber].Question}</p>
                    {values.values[questionNumber].Options.length > 0 && <Option questionIndex={questionNumber} options={values.values[questionNumber].Options} />}
                </div>
                <div style={{ padding: '5%' }}>
                    {<Button disabled={!(questionNumber > 0)} onClick={() => { setNumber(questionNumber - 1) }} className="" style={{ marginLeft: "27%", backgroundColor: 'rgb(13, 152, 241)', }}>Back</Button>}
                    {<Button disabled={!(questionNumber < values.values.length - 1)} onClick={() => { setNumber(questionNumber + 1) }} className="" style={{ marginLeft: "2%", backgroundColor: 'rgb(13, 152, 241)', }}>Next</Button>}

                </div>
            </div>

        </Col >)

}
export default MCQWizard;



export const Option = ({questionIndex, options}) => (

    <Fragment>
        {  options.map((obj, index) => {
            return <div key={index} className="custom-control custom-radio">
               
                <Field
                    component={RadioButton}
                    className="custom-control-input"
                    name={questionIndex}
                    id={`defaultChecked${index}`}
                    onSelect={() => {
                        // You have access to formProps here so if you want to update something else
                        // for example some other input box to have current value, you can do that
                        // you can grab event object from this handler and event.target.value would
                        // give you current value which you can utilize to update other stuff however you want
                        // Most of our usage in this scenario is to update another field in formik
                        // e.g.: formProps.setFieldValue('my-custom-key-in-formik', event.target.value);
                        //console.log("onSelect", formProps.values);
                    }}
                    label={obj}
                />


            </div>
        })}

    </Fragment>
)