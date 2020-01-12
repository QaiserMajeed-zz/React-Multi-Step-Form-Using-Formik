import React, { Component, Fragment } from "react";
import EmergencyContact from "./EmergencyContact";
import PersonalDetails from "./PersonalDetails";
import { References } from "./References";
import { Wizard } from '../common/wizard';
import QuestionsService from '../../services/Questions'
import QuestionsComponent from "./Questions";
import { MCQWizard } from "./MCQWizard";
import GeneralQuestions from "./GeneralQuestions";
import { Availability } from "./Availability";
import EmpHistory from "./EmploymentHistory";

var qs = new QuestionsService();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const required = value => (value ? undefined : "Required");

var that = ""
export class MainForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nationalities: [],
      services: [],
      questions: ""
    };
    that = this;
  }

  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/all', { method: 'get' })
      .then(response => response.json())
      .then(result => {

        var arr = [];
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          var obj = {
            label: element.name,
            text: element.alpha3Code
          }
          arr.push(obj);
        }
        console.log(arr);

        this.setState({
          nationalities: arr,
          services: qs.fetchAllServices().offered_services,
          //   questions: qs.fetchAllQuestions().questions,

        })
        console.log(result)
      })

      .catch(error => {
        // this.setState({isLoaded: true, error})
        // console.log(error)
      });

  }



  getQuestionsBySelectedService(service) {
    debugger
    this.setState({

      questions: qs.fetchQuestionByServiceId("Ironing")
    })

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
          //GENERAL QUESTIONS

          //SERVICE OFFERD
          //QUESTION AWNSERS AND SERVICES
          services: this.state.services,
          questions: this.state.questions,

          //REFRENCES
          employmentReferences: [
            {
              employerName: '',
              employerTelNumber: '',
              employerAddress: '',
              employerEmail: '',
            },
          ],
          //AVAILABILIY
          alwaysAvailable: false,
          days: [],
          fromHour: '',

          //EMPLOYMENT HISTORY


        }}
        onSubmit={(values, actions) => {
          console.log(actions);
          sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
        }}>

        <Wizard.Page

          headingText={'Personal Details'}>

          {props => (
            <PersonalDetails
              values={props.values}
              errors={props.errors}
              touched={props.touched}
              props={props}

            />
          )}
        </Wizard.Page>

        <Wizard.Page

          headingText={'Emergency Contact'}>

          {props => (
            <EmergencyContact
              {...props}

            />
          )}
        </Wizard.Page>

        <Wizard.Page

          headingText={'General Questions'}>

          {props => (
            <GeneralQuestions
              values={props.values}
              errors={props.errors}
              touched={props.touched}
              props={props}

            />
          )}
        </Wizard.Page>

        <Wizard.Page
          headingText={'Services Offered'}
        >
          {props => (
            <QuestionsComponent
              {...props}
              onServiceChange={this.getQuestionsBySelectedService.bind(this)}

            />
          )}

        </Wizard.Page>

        <Wizard.Page

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

        <Wizard.Page
          headingText={'Availability'}>
          {props => (
            <Availability
              {...props}
            />
          )}
        </Wizard.Page>

        <Wizard.Page
          headingText={'Employment History'}>
          {props => (
            <EmpHistory
              {...props}
            />
          )}
        </Wizard.Page>

      </Wizard>











    )
  }

}