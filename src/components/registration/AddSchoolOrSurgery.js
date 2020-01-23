import React from 'react'
import AddSchool from '../registration/AddSchool'
import AddSurgery from '../registration/AddSurgery'

const addSchoolOrSurgery = (props) => {
    return (
        <>
            <h3>Add a new school or doctors surgery to the database(added to dropdowns in form following submit)</h3>
            <AddSchool></AddSchool>
            <AddSurgery></AddSurgery>
        </>
    )
}

export default addSchoolOrSurgery