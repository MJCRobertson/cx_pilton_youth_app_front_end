import React, {Component} from 'react';
import PersonDetail from '../components/person/PersonDetail.js'
import Filter from '../components/person/Filter';
import NavBar from '../components/navigation/NavBar';


class PersonContainer extends Component {


  render(){
    return(
      <>
      <NavBar resetEditToFalse={this.props.resetEditToFalse}/>
      <PersonDetail
      person={this.props.person}
      siblings={this.props.siblings}
      showPersonDetails={this.props.showPersonDetails}
      />
      <Filter people={this.props.people}
      editPersonDetails={this.props.editPersonDetails}
      showPersonDetails={this.props.showPersonDetails}
      />
      </>
    )
  }
}

export default PersonContainer;
