import React, { Component } from 'react'
import NavBar from '../components/navigation/NavBar';
import ContactSearch from '../components/contact/ContactSearch';
import ContactList from '../components/contact/ContactList';

class ContactContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredPeople: []
    }

    this.handleSearch = this.handleSearch.bind(this);

  }

  // fetch people when component mounts
  // - workaround for if Contact page is rendered before Homepage
  componentDidMount() {
    this.props.fetchPeople();
  }

  // set filteredPeople to all people when props received
  // - so that list shows all people until it is filtered
  // HomepageContainer should be refactored in long term to avoid this
  UNSAFE_componentWillReceiveProps() {
    this.setState({ filteredPeople: this.props.people });
  }

  handleSearch(results) {
    this.setState({ filteredPeople: results })
  }

  render() {
    return (
      <>
        <NavBar resetEditToFalse={this.props.resetEditToFalse} />

        {/* Filter people by search string */}
        <ContactSearch people={this.props.people} handleSearch={this.handleSearch} />

        {/* Render filtered people in table */}
        <ContactList editPersonDetails={this.props.editPersonDetails} 
        showPersonDetails={this.props.showPersonDetails}
        filteredPeople={this.state.filteredPeople} />
      </>
    )
  }

}

export default ContactContainer;
