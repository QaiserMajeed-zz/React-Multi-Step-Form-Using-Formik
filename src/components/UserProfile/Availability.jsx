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
import moment from "moment";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";

let now = new Date();
let start = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
);
let end = moment(start)
    .add(1, "days")
    .subtract(1, "seconds");
let ranges = {
    "Today Only": [moment(start), moment(end)],
    "Yesterday Only": [
        moment(start).subtract(1, "days"),
        moment(end).subtract(1, "days")
    ],
    "3 Days": [moment(start).subtract(3, "days"), moment(end)],
    "5 Days": [moment(start).subtract(5, "days"), moment(end)],
    "1 Week": [moment(start).subtract(7, "days"), moment(end)],
    "2 Weeks": [moment(start).subtract(14, "days"), moment(end)],
    "1 Month": [moment(start).subtract(1, "months"), moment(end)],
    "1st August 18": [
        moment("2018-08-01 00:00:00"),
        moment("2018-08-02 23:59:59")
    ],
    "1 Year": [moment(start).subtract(1, "years"), moment(end)]
};
let local = {
    format: "DD-MM-YYYY HH:mm",
    sundayFirst: false
};
let maxDate = moment(end).add(24, "hour");

export function Availability({ values, errors, touched }) {

    return (
        <Fragment>
            <FormGroup>
                <Col sm="12" md={{ size: 9, offset: 4 }}>
                    <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faAmbulance} />
                </Col>
            </FormGroup>

            {renderPickerAutoApplyPastFriendly(ranges, local, maxDate, false)}


        </Fragment>
    )

    function renderPickerAutoApplyPastFriendly(ranges, local, maxDate, descendingYears) {
        let value = `${start.format(
            "DD-MM-YYYY HH:mm"
        )} - ${end.format("DD-MM-YYYY HH:mm")}`;
        return (
            <div>
                <br />
                <DateTimeRangeContainer
                    ranges={ranges}
                    start={start}
                    end={end}
                    local={local}
                    maxDate={maxDate}
                    // applyCallback={this.applyCallback}
                    // rangeCallback={this.rangeCallback}
                    autoApply
                    descendingYears={descendingYears}
                    years={[2010, 2020]}
                    pastSearchFriendly
                    smartMode
                >
                    <input
                        className="form-control"
                        id="formControlsTextB"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        style={{ cursor: "pointer" }}
                        value={value}
                    />
                </DateTimeRangeContainer>
                <div >

                </div>
                <br />
            </div>
        );
    }

    function applyCallback(startDate, endDate) {
        console.log("Apply Callback");
        console.log(startDate.format("DD-MM-YYYY HH:mm"));
        console.log(endDate.format("DD-MM-YYYY HH:mm"));

    }

}


