import { useState } from 'react';
import { User } from '../../models/User';
import './setupcard.component.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Card = ({ title, content, userData,setUserData }: { title: string, content: string, userData: User | null,setUserData:any }) => {
  const [modalAddressShow, setmodalAddressShow] = useState(false);
  const [changedUserData,setChangedUserData ] = useState(userData);
 
const handleChage=(e:any)=>{
  if(userData){
    const newUserData={...userData,name:e.target.value,phone:userData.phone,address:{...userData.address,city:e.target.value}}
    setChangedUserData(newUserData)
    
  }
}

const handleAddressClose = () => setmodalAddressShow(false);
const handleAddressShow = () => setmodalAddressShow(true);
const handleAddressSave = () => {
  fetch('https://jsonplaceholder.typicode.com/users/5', {
    method: 'PUT',
    body: JSON.stringify(changedUserData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(() => {
    alert("mentve a cím")
    setUserData(changedUserData)
        setmodalAddressShow(false)
      })
  }

  function formatAddress() {
    return <ul>
      <li>Város: {userData?.address.city}</li>
      <li>Ir.szám: {userData?.address.zipcode}</li>
      <li>utca és házszám: {userData?.address.suite}</li>
    </ul>;
  }

  function formatSubscription() {
    return <div className='cover-div'></div>;
  }

  return (<>
    <div className="setupCard">
      {(title === 'Előfizetés') ? formatSubscription() : ""}
      <div className="setupcard-title"><p>{title}</p>
        <button className='base-btn' onClick={() => {
          if (title === 'Cím') {
            handleAddressShow()
          }
        }}>Szerkesztés</button></div>
      <div className="setupcard-body">{(title === 'Cím') ? formatAddress() : content}</div>
    </div>

    <Modal show={modalAddressShow} onHide={() => {
      if (title === 'Cím') {
        handleAddressClose()
      }
    }} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Token átvátása ({userData?.phone.substring(9)})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group" >
            <label htmlFor="formGroupNameInput">Name</label>
            <input type="text" className="form-control" id="formGroupNameInput" placeholder="Név" defaultValue={userData?.name} onChange={handleChage} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupPhoneInput">Phone</label>
            <input type="text" className="form-control" id="formGroupPhoneInput" placeholder="Telefon" defaultValue={userData?.phone}/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupCityInput">Város</label>
            <input type="text" className="form-control" id="formGroupCityInput" placeholder="Város" defaultValue={userData?.address.city} onChange={handleChage}/>
          </div>
        </form>
        <Button variant="secondary" onClick={()=>{
          handleAddressSave()
        }}>
          Mentés
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          if (title === 'Cím') {
            handleAddressClose()
          }
        }}>
          Bezár
        </Button>

      </Modal.Footer>
    </Modal>


  </>
  )
}
export default Card