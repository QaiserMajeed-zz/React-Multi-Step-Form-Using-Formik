import React, { Component } from "react";
import EmergencyContact from "./EmergencyContact";
import PersonalDetails from "./PersonalDetails";
import { References } from "./References";
import { Wizard } from '../common/wizard';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const required = value => (value ? undefined : "Required");

export class MainForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nationalities: [],
    };
  }




  componentDidMount() {

    
    fetch('https://restcountries.eu/rest/v2/all', {  method: 'get' })
      .then(response => response.json())
      .then(result => {
        debugger
        var arr = [];
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          var obj = {
            label: element.name,
            text: element.alpha3Code
          }
          arr.push(obj);
        }
debugger
        this.setState({ nationalities: arr })
        console.log(result)
      })

      .catch(error => {
        // this.setState({isLoaded: true, error})
        // console.log(error)
      });

  }


  render() {

    return (
      this.state.nationalities.length > 0 && <Wizard
        initialValues={{
          dateOfBirth: "",
          nationality: this.state.nationalities,
          gender: '',
          home: '',
          mobile: '',
          currentAddress: '',
          postCode: '',
          //EMERGENCY CONTACT 
          emergencyFullName: '',
          relation: '',
          emergencyTelephone: '',
          //REFRENCES
          employmentReferences: [
            {
              employerName: '',
              employerTelNumber: '',
              employerAddress: '',
              employerEmail: '',
            },


          ],


        }}
        onSubmit={(values, actions) => {
          console.log(actions);
          sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
        }}>

        <Wizard.Page
          validate={values => {
            const errors = {};

            if (!values.home) {
              errors.home = "Please Enter Home Details";
            }
            return errors;
          }}
          headingText={'Personal Details'}>

          {props => (
            
             < PersonalDetails
             values={props.values}
             errors={props.errors}
             touched={props.touched}
             setFieldValue={props.setFieldValue}
            //nationalities={this.}


            />
          )}
        </Wizard.Page>

        <Wizard.Page
          validate={values => {
            const errors = {};

            if (!values.home) {
              errors.home = "Please Enter Home Details";
            }
            return errors;
          }}
          headingText={'Emergency Contact'}>

          {props => (
            <EmergencyContact
              values={props.values}
              errors={props.errors}
              touched={props.touched}
              props={props}

            />
          )}
        </Wizard.Page>


        <Wizard.Page
          validate={values => {
            const errors = {};

            if (!values.home) {
              errors.home = "Please Enter Home Details";
            }
            return errors;
          }}
          headingText={'References'}>

          {props => (
            <References
              values={props.values}
              errors={props.errors}
              touched={props.touched}
              props={props}

            />
          )}
        </Wizard.Page>

      </Wizard>


    )
  }

}