import React from 'react'
import ActivityListItem from './ActivityListItem';
import '../../styles/tables.css';

const ActivityList = (props) => {
  const activityNodes = props.activities.map((activity, index) => {
    return (
      <ActivityListItem
        deleteActivity={props.deleteActivity} editActivity={props.editActivity}
        activity={activity} key={index}
        showActivityDetails={props.showActivityDetails}
      />

    )
  });
  return (
    <>
      <table className='activity-list-table' align="center">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Times</th>
            <th>Age Groups</th>
            <th>Gender</th>
            <th>Location</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {activityNodes}
        </tbody>
      </table>
    </>
  )
}

export default ActivityList;
