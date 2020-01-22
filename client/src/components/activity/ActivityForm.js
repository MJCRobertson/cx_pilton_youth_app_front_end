import React, { Component } from 'react';
import '../../styles/activityForm.css';
import '../../styles/buttonStyles.css'

class ActivityForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleChange({ target: { value, name } }) {
    this.props.handleActivityChange(value, name)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleActivitySubmit();
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.handleActivityEdit();
  }

  render() {
    const isTrue = this.props.displayActivityForm;

    if (!isTrue) {
      return null;
    }
    return (

      <form className='new-activity-form'>
        <fieldset>
          <p>
            <label className='activity-table-labels'>Activity Title</label>
            <input type="text" id="title" name="title" value={this.props.activity.title} onChange={this.handleChange} required />
          </p>

          <p>
            <label className='activity-table-labels'>Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.props.activity.date}
              onChange={this.handleChange} />
          </p>

          <p>
            <label className='activity-table-labels'>Start Time</label>
            <input type="time" id="startTime" name="startTime" value={this.props.activity.startTime} onChange={this.handleChange} required />
          </p>

          <p>
            <label className='activity-table-labels'>End Time</label>
            <input type="time" id="endTime" name="endTime" value={this.props.activity.endTime} onChange={this.handleChange} required />
          </p>

          <p>Select Years:
          {this.props.activity.ageCheckboxes.map((age, i) => {
            return (
              <>

                <li className='checks' key={i}>
                  {age.year}
                  <input value={age.checked}

                    checked={age.checked} type="checkbox" onChange={this.props.onToggle.bind(this, i)} required />
                </li>
              </>
            )
          })}
          </p>

          <p>
            <label className='activity-table-labels'>Gender</label>
            <select name="gender" id="gender" value={this.props.activity.gender} onChange={this.handleChange} required>
              <option value="" defaultValue disabled hidden>Select Here</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Both">Both</option>
            </select>
          </p>

          <p>
            <label className='activity-table-labels'>Location</label>
            <input type="text" id="location" name="location" value={this.props.activity.location} onChange={this.handleChange} required />
          </p>

          <p>
            <label className='activity-table-labels'>Description</label>
            <textarea id="description" name="description" value={this.props.activity.description} onChange={this.handleChange} required>
            </textarea>
          </p>

          <p style={{ display: this.props.edit ? 'block' : 'none' }
          }>
            <button className="edit-button" type="submit" onClick={this.handleEdit}>Update Activity</button>
          </p>

          <p style={{ display: this.props.edit ? 'none' : 'block' }}>
            <button className="details-button" type="submit" onClick={this.handleSubmit}>Save Activity</button>
          </p>
        </fieldset>
      </form>
    )
  }
}

export default ActivityForm;
