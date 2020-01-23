import React from 'react'
import SchoolServices from '../../services/SchoolServices'
import SchoolRequest from '../../services/SchoolServices';

class AddSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
                name: '',
            }
        }

        this.handleSchoolUpdate = this.handleSchoolUpdate.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
    }

    handleSchoolUpdate(event) {
        this.setState({
            school: {
                name: event.target.value
            }
        })
    }

    handleSchoolChange(event) {
        const request = new SchoolRequest()
        request.post(this.state.school)
    }

    render() {
        return(
            <div>
                <form>
                    <label>New School</label>
                    <input type="text" onChange={this.handleSchoolUpdate}></input>
                    <button type="submit" onClick={this.handleSchoolChange}>Add New School</button>
                </form>

            </div>
        )
    }
}

export default AddSchool