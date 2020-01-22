import React from 'react';
import '../../styles/PersonDetails.css';

const PersonDetail = ({ person, siblings, showPersonDetails }) => {
  if (person.name.firstName === "") return null

  const siblingButtons = siblings.map(sibling => {
    const handleClickDetails = () => showPersonDetails(sibling)
    return (
      <li><button className="siblingsBtn" onClick={handleClickDetails}>{sibling.name.firstName} {sibling.name.lastName}</button></li>
    )
  })

  return (
    <div>
      <h1 className="personName"> {person.name.firstName} {person.name.lastName}</h1>
      <div className="PersonDetail">
        <div className="detailSection">
          <div>
            <h2>Details</h2>
            <label>First Name:</label>
            <p>{person.name.firstName}</p>
          </div>
          <div>
            <label>Last Name:</label>
            <p>{person.name.lastName}</p>
          </div>
          <div>
            <label>Gender:</label>
            <p>{person.gender}</p>
          </div>
          <div>
            <label>Date of Birth:</label>
            <p>{person.dob}</p>
          </div>
          <div>
            <label>Address:</label>
            <p>{person.address.address} {person.address.postcode}</p>
          </div>
          <div>
            <label>Contact Number:</label>
            <p>{person.childContactNumber}</p>
          </div>
          <div style={{ display: person.siblings.exists ? 'block' : 'none' }}>
            <label>Siblings:</label>
            <ul>{siblingButtons}</ul>
          </div>
          <div>
            <label>Ethnicity:</label>
            <p>{person.ethnicity}</p>
          </div>

        </div>

        <div className="detailSection" style={{ display: person.signed.name !== "" ? 'block' : 'none' }}>
          <h2>Guardian Details</h2>
          <div>
            <label>Name:</label>
            <p>{person.signed.name}</p>
          </div>
          <div>
            <label>Relationship:</label>
            <p>{person.signed.relationship}</p>
          </div>
          <div>
            <label>Guardian Contact Number:</label>
            <p>{person.guardianContactNumber}</p>
          </div>
          <div style={{ display: person.pickUp.toBeCollected ? 'block' : 'none' }}>
            <label>To be collected by: </label>
              <p>{person.pickUp.byWho}</p>
          </div>
        </div>

        <div className="detailSection">
          <h2 className="redFields">Emergency Contact</h2>
          <div>
            <label>Name:</label>
            <p>{person.emergencyContact.name}</p>
          </div>
          <div>
            <label>Relationship:</label>
            <p>{person.emergencyContact.relationship}</p>
          </div>
          <div>
            <label>Emergency Contact:</label>
            <p>{person.emergencyContact.number}</p>
          </div>
        </div>
      </div>

      <div className="PersonDetail">
        <div className="detailSection">
          <h2>Health Information</h2>

          <div className="redFields" style={{ display: person.dietaryRequirements.exists ? 'block' : 'none' }}>
            <label>Dietary Requirements:</label>
            <p>{person.dietaryRequirements.details}</p>
          </div>
          <div>
            <label>Doctors Surgery:</label>
            <p>{person.doctorsSurgery}</p>
          </div>
          <div className="redFields" style={{ display: person.medicalConditions.exists ? 'block' : 'none' }}>
            <label>Medical Condition:</label>
            <p>{person.medicalConditions.details}</p>
          </div>
          <div className="redFields" style={{ display: person.medicalConditions.exists ? 'block' : 'none' }}>
            <label>Medications:</label>
            <p>{person.medicalConditions.medications}</p>
          </div>
          <div className="redFields" style={{ display: person.allergies.exists ? 'block' : 'none' }}>
            <label>Allergies:</label>
            <p>{person.allergies.details}</p>
          </div>
        </div>

        <div className="detailSection">
          <h2>Community</h2>

          <div>
            <label>Community:</label>
            <p>{person.community}</p>
          </div>
          <div>
            <label>School:</label>
            <p>{person.school.name}</p>
          </div>
          <div>
            <label>Year:</label>
            <p>{person.school.year}</p>
          </div>
        </div>

        <div className="detailSection">
        <h2>Additional Details</h2>
          <div>
            <label>Volunteer:</label>
            <p>{person.volunteering ? "Yes" : "No"}</p>
          </div>
          <div>
            <label>Signed:</label>
            <p>{person.signed.signed ? "Yes" : "No"}</p>
          </div>
          <div>
            <label>Photograph Permission:</label>
            <p>{person.photographyPermission ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>

      <a href="/contact"><button className="back-to-contact-button">Back to Contacts</button></a>
      <a href=""><button className="back-button">Back to Register</button></a>

    </div>
  )
}

export default PersonDetail;
