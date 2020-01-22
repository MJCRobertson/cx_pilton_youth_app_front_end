import React from 'react';
import '../../styles/generalStyles.css';

const NewActivityButton = (props) => {

  function handleToggleActivityForm() {
    props.toggleActivityForm()
    props.resetForm()
  }

  return (
    <div className='btn-container'>
      <button className='newActivityBtn' onClick={handleToggleActivityForm}>Add New Activity</button>
    </div>
  )
}

export default NewActivityButton;