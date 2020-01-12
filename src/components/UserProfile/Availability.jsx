import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import {
    Formik,


    Form,
    Field,

    ErrorMessage,
} from 'formik';


export function Availability ({ values, errors, touched }) {

    return (
        <Fragment>
            <FormGroup>
                <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faAmbulance} />
                </Col>
            </FormGroup>

           
               

        </Fragment>
    )
}


