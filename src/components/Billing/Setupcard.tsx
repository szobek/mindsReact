import { useState } from 'react';
import { User } from '../../models/User';
import './Setupcard.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SetupCard = ({ title, content, userData, setUserData }: { title: string, content: string, userData: User | null, setUserData: any }) => {
  const [modalAddressShow, setmodalAddressShow] = useState(false);
  const [formData, setFormData] = useState<any>({...userData});
Object.assign(formData,userData);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      let keys = name.split('.');
      formData[keys[0]][keys[1]] = value;
    } else {
      if(formData!=null){
        formData[name] = value;
      }
    }
    setFormData((prevFormData: any) => ({ ...prevFormData, ...formData }));
  };
  const handleAddressClose = () => setmodalAddressShow(false);
  const handleAddressShow = () => setmodalAddressShow(true);
  const handleAddressSave = () => {
    fetch('https://jsonplaceholder.typicode.com/users/5', {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        alert("mentve a cím")
        setUserData(formData)
        setmodalAddressShow(false)
      })
  }

  const formatAddress=()=> {
    return <ul>
      <li>Város: {userData?.address.city}</li>
      <li>Ir.szám: {userData?.address.zipcode}</li>
      <li>utca és házszám: {userData?.address.suite}</li>
      <li>Név: {userData?.name}</li>
      <li>Nicknév: {userData?.username}</li>
    </ul>;
  }

  const formatSubscription=()=> {
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
        <Modal.Title>Cím szerkesztése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group" >
            <label htmlFor="formGroupNameInput">Name</label>
            <input type="text" name='name' className="form-control" id="formGroupNameInput" placeholder="Név" value={formData?.name} onChange={handleChange} />
          </div>
          <div className="form-group" >
            <label htmlFor="formGroupUsernameInput">Username</label>
            <input type="text" name='username' className="form-control" id="formGroupUsernameInput" placeholder="Nicknév" value={formData?.username} onChange={handleChange} />
          </div>
          <div className="form-group" >
            <label htmlFor="formGroupEmailInput">Email</label>
            <input type="text" name='email' className="form-control" id="formGroupEmailInput" placeholder="Nicknév" value={formData?.email} onChange={handleChange} />
          </div>
          <div className="form-group" >
            <label htmlFor="formGroupAddressCityInput">City</label>
            <input type="text" name='address.city' className="form-control" id="formGroupAddressCityInput" placeholder="Város" value={formData?.address?.city} onChange={handleChange} />
          </div>
        </form>
        <Button variant="secondary" onClick={() => {
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
export default SetupCard