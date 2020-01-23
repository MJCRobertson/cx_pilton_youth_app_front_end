import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ filteredPeople, editPersonDetails, showPersonDetails, sortTable }) => {


  return (
    <>
      <div className="table-container">
        <table align="center">
          <tbody>
            <tr>
              <th className="left-align">First Name</th>
              <th className="left-align">Last Name</th>
              <th>School Year</th>
              <th>Child Contact Number</th>
              <th>Guardian Contact Number</th>
              <th>Emergency Contact</th>
              <th></th>
              <th></th>
            </tr>
            {filteredPeople.map((person, index) => {
              return <ContactListItem showPersonDetails={showPersonDetails} editPersonDetails={editPersonDetails} person={person} key={index} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ContactList;
