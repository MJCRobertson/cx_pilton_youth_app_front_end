import React, { Component } from 'react';
import '../../styles/registrationForm.css';
import '../../styles/buttonStyles.css';
import '../../styles/print.css';
import AddSchool from './AddSchool';
import AddSurgery from './AddSurgery';
import AddSchoolOrSurgery from './AddSchoolOrSurgery'
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over16: false,
      search: '',
      addSchoolOrSurgery: false
    };
    //allows state to be reset on form submission

    this.handleChange = this.handleChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleEmergencyContactChange = this.handleEmergencyContactChange.bind(this);
    this.handleSignedChange = this.handleSignedChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
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
    this.handleSiblingsChange = this.handleSiblingsChange.bind(this);
    this.handleSiblingsAdded = this.handleSiblingsAdded.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleSignatureRadioButtonChange = this.handleSignatureRadioButtonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSiblingSearch = this.handleSiblingSearch.bind(this);
    this.handleOver16Change = this.handleOver16Change.bind(this);
    this.handleAddSchoolOrSurgery = this.handleAddSchoolOrSurgery.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.props.handleChange(value, name)
  }

  handleNameUpdate({ target: { value, name } }) {
    this.props.handleNameUpdate(value, name)
  }

  handleAddressUpdate({ target: { value, name } }) {
    this.props.handleAddressUpdate(value, name)
  }

  handleEmergencyContactChange({ target: { value, name } }) {
    this.props.handleEmergencyContactChange(value, name)
  }

  handleSignedChange({ target: { value, name } }) {
    this.props.handleSignedChange(value, name)
  }

  handleDietaryChange({ target: { name } }) {
    this.props.handleDietaryChange()
  }

  handleDietaryDetailChange({ target: { value, name } }) {
    this.props.handleDietaryDetailChange(value, name)
  }

  handleMedicalConditionsChange({ target: { name } }) {
    this.props.handleMedicalConditionsChange()
  }

  handleMedicalDetailsChange({ target: { value, name } }) {
    this.props.handleMedicalDetailsChange(value, name)
  }

  handleAllergyUpdate({ target: { name } }) {
    this.props.handleAllergyUpdate()
  }

  handleAllergyDetailsChange({ target: { value, name } }) {
    this.props.handleAllergyDetailsChange(value, name)
  }

  handleSchoolChange({ target: { value, name } }) {
    this.props.handleSchoolChange(value, name)
  }

  handleNewSchoolChange(event) {
    this.props.handleNewSchoolChange(event)
  }

  handleRadioButtonChange({ target: { value, name } }) {
    this.props.handleRadioButtonChange(value, name)
  }

  handlePickUpChange({ target: { name } }) {
    this.props.handlePickUpChange()
  }

  handlePickUpDetailsChange({ target: { value, name } }) {
    this.props.handlePickUpDetailsChange(value, name)
  }

  handleSiblingsChange({ target: { name } }) {
    this.props.handleSiblingsChange()
  }

  handleSiblingsAdded(id) {
    this.props.handleSiblingsAdded(id)
    console.log("target??", id)
  }

  handleEthnicityChange({ target: { value, name } }) {
    this.props.handleEthnicityChange(value, name)
  }

  handleSignatureRadioButtonChange({ target: { value, name } }) {
    this.props.handleSignatureRadioButtonChange(value, name)
  }

  // Submit method prevents empty fields for the fields listed below.
  handleSubmit(event) {
    event.preventDefault()
    const firstName = this.props.person.name.firstName;
    const lastName = this.props.person.name.lastName;
    const gender = this.props.person.gender;
    const dob = this.props.person.dob;
    const emergencyContactName = this.props.person.emergencyContact.name;
    const emergencyContactNumber = this.props.person.emergencyContact.number;

    if (!firstName || !lastName || !gender || !dob || !emergencyContactName || !emergencyContactNumber) {
      return
    }
    this.props.addPerson({ firstName, lastName, gender, dob, emergencyContactName, emergencyContactNumber });
  }

  handleEdit(event) {
    this.props.handleEditPersonSubmit()
  }
  handleSiblingSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  printPage() {
    window.print();
  }

  handleOver16Change({ target: { value } }) {
    if (value === "true") {
      this.setState({ over16: true })
    } else {
      this.setState({ over16: false })
    }
  }

  handleAddSchoolOrSurgery() {
    this.setState({
      addSchoolOrSurgery: true
    })
  }

  render() {
    let filteredPeople = this.props.people.filter(
      (person) => { return person.name.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || person.name.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; }
    )
    return (
      <>
        <form className="registration-form">

          <h2>Registration Form</h2>

          <fieldset>
            <h3>Child or Youth's details</h3>

            <label>Over 16:</label>
            <label>
              <input
                type="radio"
                name="over16"
                value="true"
                checked={this.state.over16 === true}
                onChange={this.handleOver16Change}
              />Yes
                </label>

            <label>
              <input
                type="radio"
                name="over16"
                value="false"
                checked={this.state.over16 === false}
                onChange={this.handleOver16Change}
              />No
              </label>
            <br>
            </br>
            <label>*First Name</label>
            <input
              type="text" id="firstName" name="firstName"
              value={this.props.person.name.firstName}
              onChange={this.handleNameUpdate}
              required
            />

            <label>*Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.props.person.name.lastName}
              onChange={this.handleNameUpdate}
              required
            />
            <div>
              <label>Contact Number</label>
              <input
                type="tel"
                maxLength="11"
                name="childContactNumber"
                id="childContactNumber"
                value={this.props.person.childContactNumber}
                onChange={this.handleChange} />

              <label>Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={this.props.person.address.address}
                onChange={this.handleAddressUpdate} />

              <label>Postcode</label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={this.props.person.address.postcode}
                onChange={this.handleAddressUpdate}
              />
            </div>

            <div>
              <label>*Gender</label>
              <select
                name="gender"
                id="gender"
                value={this.props.person.gender}
                onChange={this.handleChange}>
                <option
                  defaultValue> - select an option - </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label>*Date Of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={this.props.person.dob}
                onChange={this.handleChange}
                required
              />

              <label>Ethnicity</label>
              <select
                name="ethnicityOther"
                id="ethnicity"
                value={this.props.person.ethnicity}
                onChange={this.handleEthnicityChange}>
                <option
                  defaultValue> - select an option - </option>
                <option value="White Scottish">White Scottish</option>
                <option value="White British">White British</option>
                <option value="Black">Black</option>
                <option value="Asian">Asian</option>
                <option value="Polish">Polish</option>
                <option value="Prefer not to say">Prefer not to say</option>
                <option value="Other">Other</option>
              </select>

              <div id="ethnicityOther" style={{ display: this.props.person.ethnicity === "Other" ? 'block' : 'none' }}>
                <label>Other</label>
                <input
                  type="text"
                  name="ethnicity"
                  value={this.props.person.ethnicity}
                  onChange={this.handleChange} />
              </div>
            </div>
          </fieldset>

          <fieldset style={{ display: this.state.over16 ? 'none' : 'block' }}>
            <h3>Guardian Contact Details</h3>
            <label>Name</label>
            <input
              type="name"
              name="name"
              id="name"
              value={this.props.person.signed.name}
              onChange={this.handleSignedChange}
            />

            <label>Relationship</label>
            <input
              type="relationship"
              name="relationship"
              id="relationship"
              value={this.props.person.signed.relationship}
              onChange={this.handleSignedChange}
            />

            <label>Guardian Contact Number</label>
            <input
              type="tel"
              maxLength="11"
              name="guardianContactNumber"
              id="guardianContactNumber"
              value={this.props.person.guardianContactNumber}
              onChange={this.handleChange} />

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.props.person.email}
                onChange={this.handleChange} />
            </div>
          </fieldset>

          <fieldset>
            <label>To be collected? </label>
            <input
              type="checkbox"
              name="collectionDetails"
              checked={this.props.person.pickUp.toBeCollected === true}
              value={this.props.person.pickUp.toBeCollected}
              onChange={this.handlePickUpChange} />

            <div id="collectionDetails" style={{ display: this.props.person.pickUp.toBeCollected ? 'block' : 'none' }}>
              <label>Collected By</label>
              <input
                type="text"
                name="byWho"
                value={this.props.person.pickUp.byWho}
                onChange={this.handlePickUpDetailsChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <h3>Siblings</h3>
            <label>Siblings Registered?</label>
            <input
              type="checkbox"
              name="siblingdetails"
              checked={this.props.person.siblings.exists === true}
              value={this.props.person.siblings.exists}
              onChange={this.handleSiblingsChange} />

            <div id="siblingdetails" style={{ display: this.props.person.siblings.exists ? 'block' : 'none' }}>
              <label>Name</label>
              <input
                type="text"
                name="siblings"
                value={this.state.search}
                onChange={this.handleSiblingSearch}
              />
            </div>

            <div style={{ display: this.state.search ? 'block' : 'none' }}>
              {filteredPeople.map((person, index) => {
                return (
                  <div key={index}>
                    <p>
                      {person.name.firstName} {person.name.lastName}
                      <button onClick={() => {
                        this.handleSiblingsAdded(person._id)
                      }}
                      >Select
                      </button>
                    </p>
                  </div>
                )
              })
              }
            </div>
          </fieldset>

          <fieldset>
            <h3>Emergency Contact Details</h3>
            <label>*Name</label>
            <input
              type="name"
              name="name"
              id="name"
              value={this.props.person.emergencyContact.name}
              onChange={this.handleEmergencyContactChange}
              required
            />

            <label>Relationship</label>
            <input
              type="relationship"
              name="relationship"
              id="relationship"
              value={this.props.person.emergencyContact.relationship}
              onChange={this.handleEmergencyContactChange}
            />

            <label>*Emergency Contact Number</label>
            <input
              type="tel"
              maxLength="11"
              name="number"
              id="number"
              value={this.props.person.emergencyContact.number}
              onChange={this.handleEmergencyContactChange}
              required
            />
          </fieldset>

          <fieldset>
            <h3>Dietary Details</h3>

            <label>Dietary Requirements</label>
            <input
              type="checkbox"
              name="dietaryDetails"
              checked={this.props.person.dietaryRequirements.exists === true}
              value={this.props.person.dietaryRequirements.exists}
              onChange={this.handleDietaryChange} />

            <div id="dietaryDetails" style={{ display: this.props.person.dietaryRequirements.exists ? 'block' : 'none' }}>
              <label>Details</label>
              <input
                type="text"
                name="details"
                value={this.props.person.dietaryRequirements.details}
                onChange={this.handleDietaryDetailChange} />
            </div>

            <h3>Medical Details</h3>

            <label>Doctors Surgery</label>
            <select
              name="doctorsSurgery"
              id="doctorsSurgery"
              value={this.props.person.doctorsSurgery}
              onChange={this.handleChange}>
              <option
                defaultValue> - select an option - </option>
              {this.props.surgeries.map((surgery, index) => {

                return <option value={surgery.name} key={index}>{surgery.name}</option>

              })}

            </select>

            <label>Medical Conditions</label>
            <input
              type="checkbox"
              name="medicalDetails"
              checked={this.props.person.medicalConditions.exists === true}
              value={this.props.person.medicalConditions.exists}
              onChange={this.handleMedicalConditionsChange} />

            <div id="medicalDetails" style={{ display: this.props.person.medicalConditions.exists ? 'block' : 'none' }}>
              <label>Details</label>
              <input
                type="text"
                name="details"
                value={this.props.person.medicalConditions.details}
                onChange={this.handleMedicalDetailsChange} />

              <label>Medications</label>
              <input
                type="text"
                name="medications"
                value={this.props.person.medicalConditions.medications}
                onChange={this.handleMedicalDetailsChange} />
            </div>

            <h3>Allergy Details</h3>

            <label>Allergies</label>
            <input
              type="checkbox"
              name="allergyDetails"
              checked={this.props.person.allergies.exists === true}
              value={this.props.person.allergies.exists}
              onChange={this.handleAllergyUpdate} />

            <div id="allergyDetails" style={{ display: this.props.person.allergies.exists ? 'block' : 'none' }}>
              <label>Details</label>
              <input
                type="text"
                name="details"
                value={this.props.person.allergies.details}
                onChange={this.handleAllergyDetailsChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Community</label>
            <select
              name="community"
              id="community"
              value={this.props.person.community}
              onChange={this.handleChange}
            >
              <option
                defaultValue> - select an option - </option>
              <option value="West Pilton">West Pilton</option>
              <option value="Muirhouse">Muirhouse</option>
              <option value="West Granton">West Granton</option>
              <option value="Royston">Royston</option>
              <option value="Other">Other</option>
            </select>

            <label>School</label>
            <select
              id="name"
              name="name"
              value={this.props.person.school.name}
              onChange={this.handleSchoolChange}
            >
              <option>- select an option -</option>
              {this.props.schools.map((school, index) => {

                return <option value={school.name} key={index}>{school.name}</option>

              })}
              {/* <option value="other">other</option> */}

            </select>

            {/* {this.props.person.school.name === 'other' ?  <span><p>New School</p><input onChange={this.handleSchoolChange}></input></span> : ""} */}

            <label>Year</label>
            <select
              name="year"
              id="year"
              value={this.props.person.school.year}
              onChange={this.handleSchoolChange}>
              <option
                defaultValue> - select an option - </option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
              <option value="P4">P4</option>
              <option value="P5">P5</option>
              <option value="P6">P6</option>
              <option value="P7">P7</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
            </select>
          </fieldset>

          <fieldset>
            <label>Photograph Permission:</label>
            <label>
              <input
                type="radio"
                name="photographyPermission"
                value="true"
                checked={this.props.person.photographyPermission === true}
                onChange={this.handleRadioButtonChange} />Yes
        </label>
            <label>
              <input
                type="radio"
                name="photographyPermission"
                value="false"
                checked={this.props.person.photographyPermission === false}
                onChange={this.handleRadioButtonChange} />No
        </label>
          </fieldset>

          <fieldset>
            <label>Volunteer:</label>
            <label>
              <input
                type="radio"
                name="volunteering"
                value="true"
                checked={this.props.person.volunteering === true}
                onChange={this.handleRadioButtonChange} />Yes
      </label>
            <label>
              <input
                type="radio"
                name="volunteering"
                value="false"
                checked={this.props.person.volunteering === false}
                onChange={this.handleRadioButtonChange} />No
      </label>
          </fieldset>

          <fieldset>
            <label>Signed:</label>
            <label>
              <input
                type="radio"
                name="signed"
                value="true"
                checked={this.props.person.signed.signed === true}
                onChange={this.handleSignatureRadioButtonChange} />Yes
          </label>
            <label>
              <input
                type="radio"
                name="signed"
                value="false"
                checked={this.props.person.signed.signed === false}
                onChange={this.handleSignatureRadioButtonChange} />No
          </label>

            <label>Date</label>
            <input
              type="date"
              name="date"
              value={this.props.person.signed.date}
              onChange={this.handleSignedChange} />
          </fieldset>

          <fieldset>
            <div style={{ display: this.props.edit ? 'block' : 'none' }}>
              <Link to='/people'>
                <button className="saveForm" type="submit" onClick={this.handleEdit}>Update Person</button>
              </Link>
            </div>

            <div style={{ display: this.props.edit ? 'none' : 'block' }}>
              <button className="saveForm" type="submit" onClick={this.handleSubmit}>Save</button>

              <button className="printForm" value="Print Form" onClick={this.printPage}>Print Form</button>
            </div>

        </fieldset>
      </form>
      <div id="add-surgery-school-container">
        <a href="#add-surgery-school-container"><button onClick={this.handleAddSchoolOrSurgery}>Add New Surgery or School to Database</button></a>
        {(this.state.addSchoolOrSurgery === true) ? <AddSchoolOrSurgery></AddSchoolOrSurgery> : ""}
      </div>
      </>
    )
  }
}

export default Form;
