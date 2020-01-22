import React from 'react';
import '../../styles/tables.css';
import '../../styles/buttonStyles.css';
import { Link } from 'react-router-dom';

const ContactListItem = (props) => {

  const handleClickEdit = () => {
    console.log(props.person);
    props.editPersonDetails(props.person)
  }

  const handleClickDetails = () => {
    props.showPersonDetails(props.person)
  }


  return (
    <>
      <tr className="rowHover">
        <td className="left-align">{props.person.name.firstName}</td>
        <td className="left-align">{props.person.name.lastName}</td>
        <td>{props.person.school.year}</td>
        <td>{props.person.childContactNumber}</td>
        <td>{props.person.guardianContactNumber}</td>
        <td>{props.person.emergencyContact.name}  {props.person.emergencyContact.number}</td>
        <td>
        <Link to='/people'>
          <button onClick={handleClickDetails} className="details-button" id="detailsbtn">
       Details
       </button>
       </Link>
        </td>

        <Link to='/registration'>
     <button onClick={handleClickEdit}
      className="edit-button" id="editbtn">Edit</button>
    </Link>
      </tr>
    </>
  )

}

export default ContactListItem;
