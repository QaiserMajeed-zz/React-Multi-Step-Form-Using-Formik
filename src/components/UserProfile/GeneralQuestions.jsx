import React, { Component, Fragment, useState, useEffect } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';




function GeneralQuestions( values, errors, touched ) {
    const [questionNumber, setNumber] = useState(0);
    debugger
    useEffect(() => {

    }, [setNumber]);
    return (
        <Col sm="12" >
            {questionNumber < values.values.length ? (<div className="quiz">
                <div className="output">
                    <h3 style={{ textAlign: 'center' }}>{`Question ${questionNumber + 1}`} </h3>
                    <p>{values.values[questionNumber].question}</p>
                    {values.values[questionNumber].incorrect_answers.length > 0 && <Option options={values.values[questionNumber].incorrect_answers} />}
                </div>

                <Button onClick={() => { setNumber(questionNumber + 1) }} className="btn btn-primary" style={{ display: "inline-block" }}>Next</Button>
            </div>) : <h1>Finished !</h1>}

        </Col >)

}
export default GeneralQuestions;



export const Option = (options) => (
    <Fragment>
        {options.options.map((obj, index) => {
            return <div key={index} className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id={`defaultChecked${index}`} name="defaultExampleRadios" />
                <label className="custom-control-label" htmlFor={`defaultChecked${index}`}>{obj}</label>
            </div>
        })}

    </Fragment>
)