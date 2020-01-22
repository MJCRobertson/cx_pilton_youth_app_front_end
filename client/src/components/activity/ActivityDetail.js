import React from 'react';

const ActivityDetail = ({ activity }) => {
  if (activity.title === "") return null

  return (
    <div>
      <div className="detailSection">
      <div>
        <h1>{activity.title}</h1>
      </div>

      <div>
        <label>Date: </label>
        <p>{activity.date}</p>
      </div>

      <div>
        <label>Starts at: </label>
        <p>{activity.startTime}</p>
      </div>

      <div>
        <label>Ends at: </label>
        <p>{activity.endTime}</p>
      </div>

      <div>
        <label>Age: </label>
        <p>{activity.age}</p>
      </div>

      <div>
        <label>Gender: </label>
        <p>{activity.gender}</p>
      </div>

      <div>
        <label>Location: </label>
        <p>{activity.location}</p>
      </div>

      <div>
        <label>Description: </label>
        <p>{activity.description}</p>
      </div>

      <a href=""><button className="details-button">Close</button></a>

      </div>
    </div>
  )
}

export default ActivityDetail;
