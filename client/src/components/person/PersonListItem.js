import React from 'react';
import '../../styles/PersonListItem.css'
import '../../styles/buttonStyles.css'
import '../../styles/tables.css'
import { ReactComponent as CameraSvg } from '../../images/icons/camera.svg';
import { ReactComponent as BanSvg } from '../../images/icons/ban.svg';
import { ReactComponent as FirstAidSvg } from '../../images/icons/firstaid.svg';
import { ReactComponent as SquirrelSvg } from '../../images/icons//squirrel.svg';
import { ReactComponent as PickUpSvg } from '../../images/icons/user-friends.svg';
import { Link } from 'react-router-dom';

const PersonListItem = (props) => {

  const CameraIcon = (props) => {
    if (!props.person.photographyPermission) {
      return <button className="icon"><CameraSvg />
        <span className="iconText">No Photos</span>
      </button>
    }
    return <button className="icon"></button>
  }

  const MedicalIcon = (props) => {
    if (props.person.medicalConditions.exists) {
      return <button className="icon"><FirstAidSvg />
        <span className="iconText">{props.person.medicalConditions.details}</span>
      </button>
    }
    return <button className="icon"></button>
  }

  const AllergensIcon = (props) => {
    if (props.person.allergies.exists) {
      return <button className="icon"><SquirrelSvg />
        <span className="iconText">{props.person.allergies.details}</span>
      </button>
    }
    return <button className="icon"></button>
  }

  const PickUpIcon = (props) => {
    if (props.person.pickUp.toBeCollected) {
      return <button className="icon"><PickUpSvg />
        <span className="iconText">{props.person.pickUp.byWho}</span></button>
    }
    return <button className="icon"></button>
  }

  const BanIcon = (props) => {
    if (props.person.timeOut.exists) {
      return <button className="icon"><BanSvg />
        <span className="iconText">Time Out</span></button>
    }
    return <button className="icon"></button>
  }



  const handleClickEdit = () => {
    console.log(props.person);
    props.editPersonDetails(props.person)
  }

  const handleClickDetails = () => {
    props.showPersonDetails(props.person)
  }

  return (
    <>
      <tr className="rowHover">
        <td>{props.person.name.firstName}</td>
        <td>{props.person.name.lastName}</td>
        <td>{props.person.school.year}</td>

        <td>
          <CameraIcon person={props.person} />
          <MedicalIcon person={props.person} />
          <AllergensIcon person={props.person} />
          <PickUpIcon person={props.person} />
          <BanIcon person={props.person} />
        </td>
        <td>
          <div className="attendance"></div>
          <div className="attendance"></div>
          <div className="attendance"></div>
          <div className="attendance"></div>
          <div className="attendance"></div>
        </td>
        <td>
          <a href="#"><button onClick={handleClickDetails} className="details-button" id="detailsbtn">
            Details</button></a>
          <Link to='/registration'>
            <button onClick={handleClickEdit}
              className="edit-button" id="editbtn">Edit</button>
          </Link>
        </td>
      </tr>
    </>
  )
}

export default PersonListItem
