import React, { Component } from 'react';
import '../../styles/Search.css';
import '../../styles/tables.css';

class ContactSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.updateSearch = this.updateSearch.bind(this);
    
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 20) }, () => {
      // filter in the callback of setState so that it uses the new state
    let filteredPeople = this.props.people.filter((person) => {
      return (
        (person.name.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || person.name.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
      )
    })
    // pass filtered people back to ContactContainer
    this.props.handleSearch(filteredPeople)}
    )
  }

  render() {
    return (
      <>
        <div className="search-container" align="center">
          <div className="contact-form">
            <label>Search by first or last name: </label>
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch} />
          </div>
        </div>
      </>
    )
  }

}

export default ContactSearch;
