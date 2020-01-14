import React, { Component, Fragment } from "react";
import EmergencyContact from "./EmergencyContact";
import PersonalDetails from "./PersonalDetails";
import { References } from "./References";
import { Wizard } from '../common/wizard';
import QuestionsService from '../../services/Questions'
import QuestionsComponent from "./Questions";
import MCQWizard from "./MCQWizard";
import GeneralQuestions from "./GeneralQuestions";
import { Availability } from "./Availability";
import EmpHistory from "./EmploymentHistory";

var qs = new QuestionsService();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const required = value => (value ? undefined : "Required");

var that = ""
var selectedQuestions: [];
export class MainForm extends Component {

  selectedQuestions: [];
  constructor(props) {
    super(props);
    this.state = {
      nationalities: [],
      services: [],
      questions: [],

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
            value: element.alpha3Code
          }
          arr.push(obj);
        }
        console.log(arr);

        this.setState({
          nationalities: arr,
          services: qs.fetchAllServices().offered_services,

          //   questions: qs.fetchAllQuestions().questions,

        })

      })

      .catch(error => {
        // this.setState({isLoaded: true, error})
        // console.log(error)
      });

  }



  getQuestionsBySelectedService(service) {
    debugger
  
    //this.props.setFieldValue('selectedServices',service)
    let item = qs.fetchQuestionByServiceId(service[service.length - 1].label);
    let items = that.state.questions;
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      items.push(element)
    }
    // debugger
    // items.length == 0 ? items.push(item):items[0].push(item)
    that.setState({
      questions: items
    })

  }

  render() {



    return (

      this.state.nationalities.length > 0 && <Wizard
        initialValues={{
          dateOfBirth: "",
          nationality: this.state.nationalities,
          selectedNationality:[],
          gender: '',
          selectedGender:[],
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
          selectedServices: [],

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
          

          //GENERAL QUESTIONS
          generalQuestions: qs.fetchAllGeneralQuestion(),
          selectedGAnswers:[],

          //EMPLOYMENT HISTORY
          empHistory: [
            {
              empHistoryName: '',
              postiionTypeOfWork: '',
              hoursWork: '',
              salaryPerHour: '',
              duration: '',
              startDate: '',
              leaveDate: '',
              reason: '',
              notes: ''
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

          headingText={'Personal Details'}>

          {props => (
            <PersonalDetails
              {...props}

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
              values={props.values.generalQuestions}
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
              onServiceChange={this.getQuestionsBySelectedService}

            />
          )}


        </Wizard.Page>
        <Wizard.Page
          headingText={'Questions'}
        >
          {props => (
            <MCQWizard
              values={this.state.questions}


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