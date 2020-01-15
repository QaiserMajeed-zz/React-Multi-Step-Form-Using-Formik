import React, { Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import {
    Formik,

    Form,
    Field,

    ErrorMessage,
} from 'formik';
import { Checkbox } from "../common/checkbox";

export function Availability({ values, errors, touched }) {

    return (
        <Fragment>
            <FormGroup>
                <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faStopwatch} />
                </Col>
            </FormGroup>

            <div class="form-row">
                <div class="form-group col-md-5">
                    <label for="inputCity">All Days</label>

                    <Field
                        component={Checkbox}
                        name="availableDays.all.check"
                        id="availableDays.all.check"
                    // label="Agree to something"
                    />
                </div>
                <div class="form-group col-md-3">
                    <label for="inputState">From</label>
                    <Field
                        //  disabled={true}
                        name="availableDays.all.from"
                        type="number"
                        placeholder="From"

                        className={'form-control'} />
                    <ErrorMessage name="home" component="div" className="invalid-feedback" />
                </div>
                <div class="form-group col-md-3">
                    <label for="inputZip">To</label>
                    <Field
                        //  disabled={true}
                        name="availableDays.all.to"
                        type="number"
                        placeholder="To"

                        className={'form-control'} />
                    <ErrorMessage name="home" component="div" className="invalid-feedback" />
                </div>
            </div>
            <fieldset disabled={values.availableDays.all.check}>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label for="inputCity">Day</label>

                        <input
                            disabled={true}
                            name="availableDays.sunday"
                            type="text"
                            value="Sunday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputState">From</label>
                        <Field
                            //  disabled={true}
                            name="availableDays.sunday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputZip">To</label>
                        <Field
                            //  disabled={true}
                            name="availableDays.sunday.to"
                            type="number"
                            placeholder="To"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.monday"
                            type="text"
                            value="monday"
                            className={'form-control'} />
                        <ErrorMessage name="Monday" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            //  disabled={true}
                            name="availableDays.monday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            //  disabled={true}
                            name="availableDays.monday.to"
                            type="number"
                            placeholder="To"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.tuesday"
                            type="text"
                            value="Tuesday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.tuesday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.tuesday.to"
                            type="number"
                            placeholder="To"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.wednesday"
                            type="text"
                            value="Wednesday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.wednesday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.wednesday.to"
                            type="number"
                            placeholder="To"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.thursday"
                            type="text"
                            value="Thursday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.thursday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.thursday.to"
                            type="number"
                            placeholder="To"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.friday"
                            type="text"
                            value="Friday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.friday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.friday.to"
                            type="number"
                            placeholder="To"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <input
                            disabled={true}
                            name="availableDays.saturday"
                            type="text"
                            value="Saturday"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.saturday.from"
                            type="number"
                            placeholder="From"

                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                    <div class="form-group col-md-3">
                        <Field
                            name="availableDays.saturday.to"
                            type="number"
                            placeholder="To"
                            className={'form-control'} />
                        <ErrorMessage name="home" component="div" className="invalid-feedback" />
                    </div>
                </div>
            </fieldset>

        </Fragment >
    )



}


