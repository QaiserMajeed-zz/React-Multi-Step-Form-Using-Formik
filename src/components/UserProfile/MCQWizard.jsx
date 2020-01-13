import React, { Component, Fragment, useState, useEffect } from "react";
import { FormGroup, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';




function MCQWizard(values, errors, touched) {
    const [questionNumber, setNumber] = useState(0);
    debugger
    useEffect(() => {

    }, [setNumber]);
    return (
        <Col sm="12" >
            {questionNumber < values.values.length ? (<div className="quiz">
                <div className="output">
                    <h3 style={{ textAlign: 'center' }}>{`Question ${questionNumber + 1}`} </h3>
                    <p>{values.values[questionNumber].Question}</p>
                    {values.values[questionNumber].Options.length > 0 && <Option options={values.values[questionNumber].Options} />}
                </div>
                <div>
                <Button onClick={() => { setNumber(questionNumber + 1) }} className="" style={{ marginLeft: "36%",backgroundColor: 'rgb(13, 152, 241)', }}>Next</Button>
                </div>
            </div>) : <h1>Finished !</h1>}

        </Col >)

}
export default MCQWizard;



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