import React, {Component} from 'react';
import RestrictionsForm from '../components/restrictions/RestrictionsForm';
import RestrictionsSearch from '../components/restrictions/RestrictionsSearch';
import RestrictionsList from '../components/restrictions/RestrictionsList';
import NavBar from '../components/navigation/NavBar';
import '../styles/RestrictionStyles.css';
import '../styles/buttonStyles.css'

class RestrictionsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredPerson: '',
      personWithRestriction: ''
    }
    this.filterArray = this.filterArray.bind(this);
    this.handleRestrictionPost = this.handleRestrictionPost.bind(this);
    this.handleRestrictionPostRemoval = this.handleRestrictionPostRemoval.bind(this);
  }

//sets filteredPerson state to the object of the selected person from the dropdown
  filterArray(selectedPerson) {
      this.setState({filteredPerson: selectedPerson})
  }

//handleRestrictionPost must update filteredPerson timeOut parameters and then pass to homePage to update database
  handleRestrictionPost(timeOut) {
    const updatedPerson = this.state.filteredPerson
    updatedPerson.timeOut = timeOut
    this.setState({personWithRestriction: updatedPerson})
    this.props.updatePerson(updatedPerson);
  }

  //handleRestrictionPost must update filteredPerson timeOut parameters and then pass to homePage to update database
  handleRestrictionPostRemoval(timeOut, value) {
    console.log("this is in the container:", value)
    const updatedPerson =  this.props.people.filter(x => x._id === value)[0]
    console.log(updatedPerson)
    updatedPerson.timeOut = timeOut
    this.setState({personWithRestriction: updatedPerson})
    this.props.updatePerson(updatedPerson);
  }

  render(){
    return(
      <>
      <NavBar resetEditToFalse={this.props.resetEditToFalse}/>
      <h2> Restriction Table </h2>
        <table align="center">
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Reason</th>
              <th>Notes</th>
              <th>Remove</th>
            </tr>
            {this.props.people.map((person, index) => {
              return<RestrictionsList person={person} key={index} handleRestrictionPostRemoval={this.handleRestrictionPostRemoval}/>
            })}
          </tbody>
        </table>
        <br/>
        <fieldset className="add-restrictions">
          <h2> Add a restriction </h2>
          <RestrictionsSearch people={this.props.people} filterArray={this.filterArray}/>
          <RestrictionsForm handleRestrictionPost={this.handleRestrictionPost} />
        </fieldset>
      </>
    )
  }
}

export default RestrictionsContainer;



//   restrictionsList() {
//   const list = this.props.people.map((person, index) => {
//     return <li value={index} key={index}>
//       {person.name.firstName} {person.name.lastName}
//     </li>
//   })
// }
