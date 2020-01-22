import React from 'react';

const RestrictionsList = (props) => {

  const RestrictedList = (props) => {
    if (props.person.timeOut.exists) {
      var startDateReduced = "no date entered";
      var endDateReduced = "no date entered";

      if (props.person.timeOut.startDate) {
        const startDate = props.person.timeOut.startDate;
        startDateReduced = startDate.slice(0, 10);
      }

      if (props.person.timeOut.endDate) {
        const endDate = props.person.timeOut.endDate;
        endDateReduced = endDate.slice(0, 10);
      }

      return <tr><td>{props.person.name.firstName}</td>
        <td>{props.person.name.lastName}</td><td>{startDateReduced}</td>
        <td>{endDateReduced}</td><td>{props.person.timeOut.reason}</td>
        <td>{props.person.timeOut.notes}</td>
        <td><button onClick={handleClick}
          value={props.person._id}
          className="remove-restrictions-btn">
          Remove</button></td></tr>
    }
    return null
  }

  function handleClick({ target: { value } }) {
    const timeOut = {
      "exists": false,
      "startDate": null,
      "endDate": null,
      "reason": null,
      "notes": null
    }
    props.handleRestrictionPostRemoval(timeOut, value);
  }

  return (
    <>
      <RestrictedList person={props.person} />
    </>
  )
}

export default RestrictionsList;


//MOMENT.JS
