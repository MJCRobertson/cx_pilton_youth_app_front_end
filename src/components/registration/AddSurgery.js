import React from 'react'
import SurgeryServices from '../../services/SurgeryServices'
import SurgeryRequest from '../../services/SurgeryServices';

class AddSurgery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surgery: {
                name: '',
            }
        }

        this.handleSurgeryUpdate = this.handleSurgeryUpdate.bind(this);
        this.handleSurgeryChange = this.handleSurgeryChange.bind(this);
    }

    handleSurgeryUpdate(event) {
        this.setState({
            surgery: {
                name: event.target.value
            }
        })
    }

    handleSurgeryChange(event) {
        const request = new SurgeryRequest()
        request.post(this.state.surgery)
    }

    render() {
        return(
            <div>
                <form>
                    <label>New Surgery</label>
                    <input type="text" onChange={this.handleSurgeryUpdate}></input>
                    <button type="submit" onClick={this.handleSurgeryChange}>Add New Surgery</button>
                </form>

            </div>
        )
    }
}

export default AddSurgery