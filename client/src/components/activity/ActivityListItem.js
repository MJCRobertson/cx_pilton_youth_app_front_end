import React from 'react';
import '../../styles/buttonStyles.css';
import '../../styles/tables.css';

const ActivityListItem = (props) => {

  function handleDelete() {
    props.deleteActivity(props.activity._id)
  }

  function handleEdit() {
    props.editActivity(props.activity)
  }

  function handleClickDetails() {
    props.showActivityDetails(props.activity)
  }

  return (
    <>
      <tr>
        <td>{props.activity.title}</td>
        <td className="dateRev">{props.activity.date}</td>
        <td>{props.activity.startTime} - {props.activity.endTime}</td>
        <td>{props.activity.age.join(', ')}</td>
        <td>{props.activity.gender}</td>
        <td>{props.activity.location}</td>
        <td><button className="edit-button" onClick={handleEdit}>Edit Activity</button></td>
        <td><button className="delete-button" onClick={handleDelete}>Delete Activity</button></td>
        <td><button onClick={handleClickDetails} className="details-button" id="detailsbtn">Show Details</button></td>
      </tr>
    </>
  )
}

export default ActivityListItem;
