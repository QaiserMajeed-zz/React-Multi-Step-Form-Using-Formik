
import React, { Component, Fragment } from 'react';
import MainForm from './MainForm';
import NavbarComponent from '../common/NavBar';

class ProfileComponent extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent/>
                <div class="d-flex align-items-center flex-column  h-100 text-white" id="header">
                    <MainForm></MainForm>
                </div>
            </Fragment>
        )
    }
}

export default ProfileComponent;

