import React from 'react';

const RestrictionsForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const timeOut = {
      "exists": true,
      "startDate": event.target.startDate.value,
      "endDate": event.target.endDate.value,
      "reason": event.target.reason.value,
      "notes": event.target.notes.value
    }
    props.handleRestrictionPost(timeOut);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Input restriction date range</h4>
          <label>Start Date:</label>
          <input type="date" name="startDate" />

          <label>End Date:</label>
          <input type="date" name="endDate" />
        </div>
        <div>
          <h4>Input restriction details</h4>
          <label>Reason:</label>
          <input type="text" size="100" name="reason" />
          <br />
          <label>Notes:</label>
          <input type="text" size="100" name="notes" />
        </div>
        <div>
          <button className="new-restrictions-btn" type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default RestrictionsForm;
