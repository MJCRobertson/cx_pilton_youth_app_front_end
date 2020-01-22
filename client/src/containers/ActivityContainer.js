import React, {Component} from 'react';
import ActivityList from '../components/activity/ActivityList';
import ActivityForm from '../components/activity/ActivityForm';
import NewActivityButton from '../components/activity/NewActivityButton';
import NavBar from '../components/navigation/NavBar';
import ActivitDetail from '../components/activity/ActivityDetail.js'

class ActivityContainer extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      edit: false,
      activity: {
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        age: [],
        ageCheckboxes: [
        {year: 'P1', checked: false},
        {year: 'P2', checked: false},
        {year: 'P3', checked: false},
        {year: 'P4', checked: false},
        {year: 'P5', checked: false},
        {year: 'P6', checked: false},
        {year: 'P7', checked: false},
        {year: 'S1', checked: false},
        {year: 'S2', checked: false},
        {year: 'S3', checked: false},
        {year: 'S4', checked: false},
        ],
        gender: '',
        location: '',
        description: '',
        id: null
      }
    }
    this.state = this.initialState

    this.editActivity = this.editActivity.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleActivitySubmit = this.handleActivitySubmit.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.handleActivityEdit = this.handleActivityEdit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.showActivityDetails = this.showActivityDetails.bind(this);
  }

  resetForm(){
    this.setState(this.initialState)
  }

  handleActivityChange(value, name){
    this.setState(prevState => ({
      activity: {
        ...prevState.activity,
        [name]: value
      }
    }))
  }

  handleActivitySubmit(){
    const newActivity = {
      title: this.state.activity.title,
      date: this.state.activity.date,
      startTime: this.state.activity.startTime,
      endTime: this.state.activity.endTime,
      age: this.state.activity.age,
      gender: this.state.activity.gender,
      location: this.state.activity.location,
      description: this.state.activity.description
    }
    this.props.addActivity(newActivity);
    this.setState(prevState => ({
      activity: {
        ...prevState.activity,
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        age: [
        {year: 'P1', checked: false},
        {year: 'P2', checked: false},
        {year: 'P3', checked: false},
        {year: 'P4', checked: false},
        {year: 'P5', checked: false},
        {year: 'P6', checked: false},
        {year: 'P7', checked: false},
        {year: 'S1', checked: false},
        {year: 'S2', checked: false},
        {year: 'S3', checked: false},
        {year: 'S4', checked: false},
        ],
        gender: '',
        location: '',
        description: ''}})
      )
  }

  showActivityDetails(activityToShow){
    this.setState({activity: activityToShow})
  }


  editActivity(activity){
    const ages = activity.age
    const ageCheckboxes = [
    {year: 'P1', checked: false},
    {year: 'P2', checked: false},
    {year: 'P3', checked: false},
    {year: 'P4', checked: false},
    {year: 'P5', checked: false},
    {year: 'P6', checked: false},
    {year: 'P7', checked: false},
    {year: 'S1', checked: false},
    {year: 'S2', checked: false},
    {year: 'S3', checked: false},
    {year: 'S4', checked: false},
    ]
    ageCheckboxes.forEach((obj)=> {
      if(ages.indexOf(obj.year) !== -1){
        obj.checked = true
      }
    })
    this.setState(prevState => ({
       activity: {
       ...prevState.activity,
       title: activity.title,
       date: activity.date,
       startTime: activity.startTime,
       endTime: activity.endTime,
       gender: activity.gender,
       location: activity.location,
       description: activity.description,
       ageCheckboxes: ageCheckboxes,
       id: activity._id
     },
     edit: !this.state.edit}))
     this.props.toggleActivityForm();
  }

   handleActivityEdit(){
    const id = this.state.activity.id
    const updatedActivity = {
      title: this.state.activity.title,
      date: this.state.activity.date,
      startTime: this.state.activity.startTime,
      endTime: this.state.activity.endTime,
      age: this.state.activity.age,
      gender: this.state.activity.gender,
      location: this.state.activity.location,
      description: this.state.activity.description
    }
    this.props.updateActivity(id, updatedActivity);
    this.setState(prevState => ({
      activity: {
        ...prevState.activity,
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        age: [
        {year: 'P1', checked: false},
        {year: 'P2', checked: false},
        {year: 'P3', checked: false},
        {year: 'P4', checked: false},
        {year: 'P5', checked: false},
        {year: 'P6', checked: false},
        {year: 'P7', checked: false},
        {year: 'S1', checked: false},
        {year: 'S2', checked: false},
        {year: 'S3', checked: false},
        {year: 'S4', checked: false},
        ],
        gender: '',
        location: '',
        description: ''}})
      )
   this.props.toggleActivityForm();
  }

  onToggle(index, e){
  let newAges = this.state.activity.ageCheckboxes.slice();
  newAges[index].checked = !newAges[index].checked
  const filtered = newAges.filter(entry => Object.values(entry).some(val => val === true ));
  this.setState(prevState => ({
    activity: {
      ...prevState.activity,
      age: filtered.map(({ year }) => year)
  }})
  )

  }

  render(){
    return(
      <>
      <NavBar resetEditToFalse={this.props.resetEditToFalse}/>
      <ActivitDetail
      activity={this.state.activity}
      />
      <ActivityList
      activities={this.props.activities} deleteActivity={this.props.deleteActivity}
      editActivity={this.editActivity}
      showActivityDetails={this.showActivityDetails}

      />
      <NewActivityButton  toggleActivityForm={this.props.toggleActivityForm}
      resetForm={this.resetForm}/>
      <ActivityForm
      handleActivitySubmit={this.handleActivitySubmit}
      displayActivityForm={this.props.displayActivityForm}
      edit={this.state.edit}
      handleActivityChange={this.handleActivityChange}
      activity={this.state.activity}
      onToggle={this.onToggle}
      handleActivityEdit={this.handleActivityEdit}/>
      </>
    )
  }
}

export default ActivityContainer;
