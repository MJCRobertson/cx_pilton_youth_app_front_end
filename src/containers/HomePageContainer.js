import React, { Component } from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';
import ActivityContainer from './ActivityContainer';
import RegistrationContainer from './RegistrationContainer';
import RestrictionsContainer from './RestrictionsContainer';
import Header from '../components/home/Header';
import Button from '../components/home/Button';
import ActivityRequest from '../services/ActivityServices.js'
import PeopleRequest from '../services/PeopleServices.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class HomePageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      people: [],
      displayActivityForm: false,
      edit: false,
      person: {
        name: {
          firstName: '',
          lastName: ''
        },
        gender: '',
        dob: '',
        address: {
          address: '',
          postcode: ''
        },
        email: '',
        childContactNumber: '',
        guardianContactNumber: '',
        emergencyContact: {
          name: '',
          relationship: '',
          number: ''
        },
        dietaryRequirements: {
          exists: false,
          details: ''
        },
        medicalConditions: {
          exists: false,
          details: '',
          medications: ''
        },
        allergies: {
          exists: false,
          details: ''
        },
        doctorsSurgery: '',
        community: '',
        school: {
          name: '',
          year: ''
        },
        photographyPermission: true,
        pickUp: {
          toBeCollected: false,
          byWho: ''
        },
        siblings: {
          exists: false,
          ids: []
        },
        ethnicity: '',
        volunteering: true,
        signed: {
          signed: false,
          name: '',
          relationship: '',
          date: ''
        },
        timeOut: {
          exists: false,
          reason: '',
          notes: ''
        }
      },
      siblings: []
    }

    this.fetchPeople = this.fetchPeople.bind(this);
    this.fetchActivities = this.fetchActivities.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderPeople = this.renderPeople.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.renderRestrictions = this.renderRestrictions.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleEmergencyContactChange = this.handleEmergencyContactChange.bind(this);
    this.handleSignedChange = this.handleSignedChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
    this.handleDietaryDetailChange = this.handleDietaryDetailChange.bind(this);
    this.handleMedicalConditionsChange = this.handleMedicalConditionsChange.bind(this);
    this.handleMedicalDetailsChange = this.handleMedicalDetailsChange.bind(this);
    this.handleAllergyUpdate = this.handleAllergyUpdate.bind(this);
    this.handleAllergyDetailsChange = this.handleAllergyDetailsChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    this.handlePickUpChange = this.handlePickUpChange.bind(this);
    this.handlePickUpDetailsChange = this.handlePickUpDetailsChange.bind(this);
    this.handleSiblingsAdded = this.handleSiblingsAdded.bind(this);
    this.handleSiblingsChange = this.handleSiblingsChange.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleSignatureRadioButtonChange = this.handleSignatureRadioButtonChange.bind(this);
    this.editPersonDetails = this.editPersonDetails.bind(this);
    this.showPersonDetails = this.showPersonDetails.bind(this);
    this.handleEditPersonSubmit = this.handleEditPersonSubmit.bind(this);
    this.resetEditToFalse = this.resetEditToFalse.bind(this);
  }

  //handles changes to top level keys in person object
  handleChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        [name]: value
      }
    }));
  }

  // The following methods handle the changes to the form and setting state.
  handleNameUpdate(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: {
          ...prevState.person.name,
          [name]: value
        }
      }
    }));
  }

  handleAddressUpdate(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        address: {
          ...prevState.person.address,
          [name]: value
        }
      }
    }))
  }

  handleEmergencyContactChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        emergencyContact: {
          ...prevState.person.emergencyContact,
          [name]: value
        }
      }
    }))
  }

  handleSignedChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        signed: {
          ...prevState.person.signed,
          [name]: value
        }
      }
    }))
  }

  handleDietaryChange() {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        dietaryRequirements: {
          ...prevState.person.dietaryRequirements,
          exists: !this.state.person.dietaryRequirements.exists,
          details: ''
        }
      }
    }))
  }

  handleDietaryDetailChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        dietaryRequirements: {
          ...prevState.person.dietaryRequirements,
          [name]: value
        }
      }
    }))
  }

  handleMedicalConditionsChange() {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        medicalConditions: {
          ...prevState.person.medicalConditions,
          exists: !this.state.person.medicalConditions.exists,
          details: '',
          medications: ''
        }
      }
    }))
  }

  handleMedicalDetailsChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        medicalConditions: {
          ...prevState.person.medicalConditions,
          [name]: value
        }
      }
    }))
  }

  handleAllergyUpdate() {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        allergies: {
          ...prevState.person.allergies,
          exists: !this.state.person.allergies.exists,
          details: ''
        }
      }
    }))
  }

  handleAllergyDetailsChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        allergies: {
          ...prevState.person.allergies,
          [name]: value
        }
      }
    }))
  }

  handleSchoolChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        school: {
          ...prevState.person.school,
          [name]: value
        }
      }
    }))
  }

  handleRadioButtonChange(value, name) {
    if (value === "true") {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          [name]: true
        }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          [name]: false
        }
      }))
    }
  }

  handlePickUpChange() {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        pickUp: {
          ...prevState.person.pickUp,
          toBeCollected: !this.state.person.pickUp.toBeCollected,
          byWho: ''
        }
      }
    }))
  }

  handlePickUpDetailsChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        pickUp: {
          ...prevState.person.pickUp,
          [name]: value
        }
      }
    }))
  }

  handleSiblingsChange() {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        siblings: {
          ...prevState.person.siblings,
          exists: !this.state.person.siblings.exists,
          ids: []
        }
      }
    }))
  }

  handleSiblingsAdded(personID) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        siblings: {
          ...prevState.person.siblings,
          ids: [...prevState.person.siblings.ids, personID]
        }
      }
    }))
  }

  handleEthnicityChange(value, name) {
    if (value === "Other") {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          ethnicity: ''
        }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          ethnicity: value
        }
      }))
    }
  }

  handleSignatureRadioButtonChange(value, name) {
    if (value === "true") {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          signed: {
            ...prevState.person.signed,
            signed: true
          }
        }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          signed: {
            ...prevState.person.signed,
            signed: false
          }
        }
      }))
    }
  }
  //End of Person form setting state methods


  // Toggles the form for adding an activity
  toggleActivityForm = () => {
    this.setState((prevState) => ({
      displayActivityForm: !prevState.displayActivityForm
    }));
  }

  //Posts activity to db and on frontend
  addActivity(activity) {
    const request = new ActivityRequest()
    request.post(activity)
    const activities = [...this.state.activities, activity];
    this.setState({ activities });
    this.setState({ displayActivityForm: false })
  }

  getActivity() {
    const request = new ActivityRequest()
    request.get()
    .then(activities => this.setState({ activities: activities.data }))
  }

  //edit activity and updates db
  updateActivity(id, activity) {
    const request = new ActivityRequest()
    request.edit(id, activity)

    // const tempActivities = this.state.activities
    // const index = tempActivities.indexOf(id);
    // tempActivities.splice(index, 1, activity);
    // this.setState({activities: tempActivities})
  }

  //removes activity from db and frontend
  deleteActivity(id) {
    const request = new ActivityRequest()
    request.delete(id)
    const tempActivities = this.state.activities
    const index = tempActivities.indexOf(id);
    tempActivities.splice(index, 1);
    this.setState({ activities: tempActivities })
  }

  //Adds person to db and frontend - resets state
  addPerson() {
    const person = this.state.person
    const request = new PeopleRequest()
    request.post(person)
    const people = [...this.state.people, person];
    this.setState({ people });
    const resetPerson = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      childContactNumber: '',
      guardianContactNumber: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
      siblings: {
        exists: false,
        ids: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date: ''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    }
    this.setState({ person: resetPerson })
  }
  //Gets details from selected person to edit and sets the state which is passed down to pre-populate the form. sets edit to true so that update button is displayed.
  editPersonDetails(personToEdit) {
    this.setState({ person: personToEdit, edit: true })
  }

  showPersonDetails(personToShow) {
    this.fetchSiblings(personToShow)
    this.setState({ person: personToShow })
  }

  //Gets data for updating the persona dn resets the state
  handleEditPersonSubmit() {
    const updatedPerson = this.state.person
    this.updatePerson(updatedPerson)
    const resetPerson = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      childContactNumber: '',
      guardianContactNumber: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
      siblings: {
        exists: false,
        ids: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date: ''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    }
    this.setState({ person: resetPerson, edit: false })
  }

  // posts updated person to db commented out code is to try and update the frontend but not working.
  updatePerson(updatedPerson) {
    const request = new PeopleRequest()
    request.edit(updatedPerson._id, updatedPerson)
    // const tempPeople = this.state.people
    // const index = this.state.people.indexOf(updatedPerson._id);
    // tempPeople.splice(index, 1, updatedPerson);
    // this.setState({people: tempPeople})
  }

  //This method ensures that if someone moves out of editing a person and then navigates to the form it is reset to be empty and edit set to false
  resetEditToFalse() {
    const resetPerson = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      childContactNumber: '',
      guardianContactNumber: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
      siblings: {
        exists: false,
        ids: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date: ''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    }
    this.setState({ person: resetPerson, edit: false })
  }

  fetchSiblings(person) {
    const request = new PeopleRequest()
    Promise.all(person.siblings.ids.map(id => request.findById(id) ))
    .then(values => {
      const siblings = values.map(value => value.data)
      this.setState({ siblings: siblings })
    })
  }


  fetchPeople() {
    const request = new PeopleRequest()
    request.get()
    .then(people => this.setState({ people: people.data }))
    .catch(err => console.error);
  }

  fetchActivities() {
    const request = new ActivityRequest()
    request.get()
    .then(activities => this.setState({ activities: activities.data }))
    .catch(err => console.error);
  }

  //fetches data from database
  componentDidMount() {
    this.fetchPeople();
    this.fetchActivities();
  }

  renderMain() {
    return (
      <>
      <Button resetEditToFalse={this.resetEditToFalse} />
      </>
    )
  }

  renderContact() {
    return (
      <ContactContainer
      people={this.state.people}
      resetEditToFalse={this.resetEditToFalse}
      fetchPeople={this.fetchPeople}
      editPersonDetails={this.editPersonDetails}
      showPersonDetails={this.showPersonDetails}
      />
    )
  }

  renderActivities() {
    return (
      <ActivityContainer
      activities={this.state.activities}
      addActivity={this.addActivity}
      displayActivityForm={this.state.displayActivityForm}
      toggleActivityForm={this.toggleActivityForm}
      deleteActivity={this.deleteActivity}
      updateActivity={this.updateActivity}
      resetEditToFalse={this.resetEditToFalse}
      />
    )
  }

  renderPeople() {
    return (

      <PersonContainer
      people={this.state.people}
      person={this.state.person}
      siblings={this.state.siblings}
      editPersonDetails={this.editPersonDetails}
      showPersonDetails={this.showPersonDetails}
      resetEditToFalse={this.resetEditToFalse}
      />
    )
  }

  renderRestrictions() {
    return (
      <RestrictionsContainer
      people={this.state.people}
      updatePerson={this.updatePerson}
      resetEditToFalse={this.resetEditToFalse} />
    )
  }

  renderRegistration() {
    return (
      <RegistrationContainer addPerson={this.addPerson}
      people={this.state.people}
      handleChange={this.handleChange}
      handleNameUpdate={this.handleNameUpdate}
      handleAddressUpdate={this.handleAddressUpdate}
      handleEmergencyContactChange={this.handleEmergencyContactChange}
      handleSignedChange={this.handleSignedChange}
      handleDietaryChange={this.handleDietaryChange}
      handleDietaryDetailChange={this.handleDietaryDetailChange}
      handleMedicalConditionsChange={this.handleMedicalConditionsChange}
      handleMedicalDetailsChange={this.handleMedicalDetailsChange}
      handleAllergyUpdate={this.handleAllergyUpdate}
      handleAllergyDetailsChange={this.handleAllergyDetailsChange}
      handleSchoolChange={this.handleSchoolChange}
      handleRadioButtonChange={this.handleRadioButtonChange}
      handlePickUpChange={this.handlePickUpChange}
      handlePickUpDetailsChange={this.handlePickUpDetailsChange}
      handleSiblingsAdded={this.handleSiblingsAdded}
      handleSiblingsChange={this.handleSiblingsChange}
      handleEthnicityChange={this.handleEthnicityChange}
      handleSignatureRadioButtonChange={this.handleSignatureRadioButtonChange}
      handleEditPersonSubmit={this.handleEditPersonSubmit}
      edit={this.state.edit}
      person={this.state.person} />
    )
  }

  render() {
    return (
      <Router>
      <React.Fragment>
      <Header />


      <Route exact path="/" render={this.renderMain} />
      <Route exact path="/registration" render={this.renderRegistration} />
      <Route exact path="/restrictions" render={this.renderRestrictions} />
      <Route exact path="/contact" render={this.renderContact} />
      <Route exact path="/people" render={this.renderPeople} />
      <Route exact path="/activities" render={this.renderActivities} />

      </React.Fragment>
      </Router>
    )
  }
}

export default HomePageContainer
