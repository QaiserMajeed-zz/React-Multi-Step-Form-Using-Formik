import React, { Fragment } from "react";
import { Formik, Field } from "formik";
import { FormGroup, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAmbulance, faHistory } from '@fortawesome/free-solid-svg-icons';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const required = value => (value ? undefined : "Required");

export const Error = ({ name }) => (
    <Field
        name={name}
        render={({ form: { touched, errors } }) =>
            touched[name] && errors[name] ? <span>{errors[name]}</span> : null
        }
    />
);

export class Wizard extends React.Component {
    static Page = ({ children, parentState }) => {
        return children(parentState);
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            values: props.initialValues
        };
    }

    next = values =>
        this.setState(state => ({
            page: Math.min(state.page + 1, this.props.children.length - 1),
            values
        }));

    previous = () =>
        this.setState(state => ({
            page: Math.max(state.page - 1, 0)
        }));

    validate = values => {
        const activePage = React.Children.toArray(this.props.children)[
            this.state.page
        ];
        return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    handleSubmit = (values, bag) => {
        const { children, onSubmit } = this.props;
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values, bag);
        } else {
            this.next(values);
            bag.setSubmitting(false);
        }
    };

    render() {
        const { children } = this.props;
        const { page, values } = this.state;
        const activePage = React.Children.toArray(children)[page];
        console.log(activePage);
        const isLastPage = page === React.Children.count(children) - 1;
        return (
            <Fragment>
                <h1 className="display-4" style={{ padding: '5px', color: 'white', fontSize: '30px' }}>{activePage.props.headingText}</h1>
                <div className="col-md-4" style={{ backgroundColor: 'white', paddingTop: '15px', borderRadius: '10px' }} >
                    <Formik
                        initialValues={values}
                        enableReinitialize={false}
                        validate={this.validate}
                        onSubmit={this.handleSubmit}
                        render={props => (
                            <form onSubmit={props.handleSubmit}>
                                {React.cloneElement(activePage, { parentState: { ...props } })}
                                <FormGroup>
                                    {page > 0 && (
                                        <button onClick={this.previous} style={{ outline: "none" }} className="float-left border-0 bg-transparent" >

                                            <FontAwesomeIcon style={{ 'color': "#007bff" }} icon={faArrowLeft} />
                                            <Label>Back</Label>
                                        </button>
                                    )}



                                    {!isLastPage && <button type="Submit" style={{ outline: "none" }} className="float-right border-0 bg-transparent" >
                                        <Label>Next</Label>
                                        <FontAwesomeIcon style={{ 'color': "#007bff" }} icon={faArrowRight} />
                                    </button>}
                                    {isLastPage && (

                                        <button type="Submit" style={{ outline: "none" }} className="float-right border-0 bg-transparent" >
                                            <Label>Save and Continue</Label>
                                            <FontAwesomeIcon style={{ 'color': "#007bff" }} icon={faArrowRight} />
                                        </button>

                                    )}
                                </FormGroup>

                            </form>
                        )}
                    />
                </div>
            </Fragment>
        );
    }
}
