import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import LayoutText from './LayoutText';
import NavBarComponent from './../common/NavBar';

const LayoutPage = (props) => {

    return (
        <Row>
            <Col sm="12" md={{ size: 12 }}>
                <NavBarComponent />
                <LayoutText />
            </Col>
        </Row>
    )
}
export default LayoutPage;