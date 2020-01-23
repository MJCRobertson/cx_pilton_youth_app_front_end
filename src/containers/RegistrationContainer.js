import React, {Component} from 'react';
import Form from '../components/registration/Form';
import NavBar from '../components/navigation/NavBar';



class RegistrationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      schools: [],
      surgeries: []
    }

  }

  componentDidMount() {
    fetch('http://localhost:8080/api/schools')
    .then(res => res.json())
    .then(schools => this.setState({
      schools: schools.data
    }))
    .catch(err => console.error);


    fetch('http://localhost:8080/api/surgeries')
    .then(res => res.json())
    .then(surgeries => this.setState({
      surgeries: surgeries.data
    }))
    .catch(err => console.error);

  }

  render(){
    return(
      <>
      <NavBar resetEditToFalse={this.props.resetEditToFalse}/>
      <Form
      schools={this.state.schools}
      surgeries={this.state.surgeries}
      addPerson={this.props.addPerson}
      handleChange={this.props.handleChange}
      handleNameUpdate={this.props.handleNameUpdate}
      handleAddressUpdate={this.props.handleAddressUpdate}
      handleEmergencyContactChange={this.props.handleEmergencyContactChange}
      handleSignedChange={this.props.handleSignedChange}
      handleDietaryChange={this.props.handleDietaryChange}
      handleDietaryDetailChange={this.props.handleDietaryDetailChange}
      handleMedicalConditionsChange={this.props.handleMedicalConditionsChange}
      handleMedicalDetailsChange={this.props.handleMedicalDetailsChange}
      handleAllergyUpdate={this.props.handleAllergyUpdate}
      handleAllergyDetailsChange={this.props.handleAllergyDetailsChange}
      handleSchoolChange={this.props.handleSchoolChange}
      handleRadioButtonChange={this.props.handleRadioButtonChange}
      handlePickUpChange={this.props.handlePickUpChange}
      handlePickUpDetailsChange={this.props.handlePickUpDetailsChange}
      handleSiblingsAdded={this.props.handleSiblingsAdded}
      handleSiblingsChange={this.props.handleSiblingsChange}
      handleEthnicityChange={this.props.handleEthnicityChange}
      handleSignatureRadioButtonChange={this.props.handleSignatureRadioButtonChange}
      handleEditPersonSubmit={this.props.handleEditPersonSubmit}
      edit={this.props.edit}
      person={this.props.person}
      people={this.props.people}
      />
      </>
    )
  }
}

export default RegistrationContainer;
