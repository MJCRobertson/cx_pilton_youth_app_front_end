import React from 'react';

const RestrictionsSearch = (props) => {
  const options = props.people.map((person, index) => {
    return <option value={index} key={index}>
      {person.name.firstName} {person.name.lastName}
    </option>
  })

//calls the filterArray function from the restrictionsContainer and passes selected person object
  function handleChange(event) {
    props.filterArray(props.people[event.target.value])
  }

    return(
      <>
        <select id="child-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a child...</option>
        {options}
        </select>
      </>
    )
}


export default RestrictionsSearch;
