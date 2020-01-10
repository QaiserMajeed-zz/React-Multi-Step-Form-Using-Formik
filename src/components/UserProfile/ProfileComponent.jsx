
import React, { Component, Fragment } from 'react';
import { MainForm } from './MainForm';
import NavbarComponent from '../common/NavBar';

class ProfileComponent extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent {...this.props} />
                <div className="d-flex align-items-center flex-column  h-100 " id="header">
                    <MainForm></MainForm>
                </div>
            </Fragment>
        )
    }
}

export default ProfileComponent;

