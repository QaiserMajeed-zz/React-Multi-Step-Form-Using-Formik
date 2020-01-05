import { Component } from 'react';
class MainHeading extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h1 className="justify-content-center align-items-center" >{this.props.text}</h1>
            </div>
        )
    }
}

export default MainHeading;