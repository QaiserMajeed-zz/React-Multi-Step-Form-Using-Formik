import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import LayoutText from './LayoutText';
import NavBarComponent from './../common/NavBar';

const LayoutPage = (props) => {
    console.log("Layout", props)
    return (
        <Row>

            <Col sm="12" md={{ size: 12 }}>
                <NavBarComponent {...props} />
                <LayoutText />
            </Col>
        </Row>
    )
}
export default LayoutPage;