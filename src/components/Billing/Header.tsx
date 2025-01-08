import { useState } from 'react';
import { User } from '../../models/User';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BilllingHeader = ({ userData }: { userData: User | null }) => {
  const [modalShow, setmodalShow] = useState(false);

  const handleClose = () => setmodalShow(false);
  const handleShow = () => setmodalShow(true);
  const handleSave = () => {
    if (userData) {
      userData.phone = "256984562365"

      fetch('https://jsonplaceholder.typicode.com/users/5', {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(() => {
          alert("mentve")
          setmodalShow(false)
        })
    }
  }
  return (
    <header className="billing-header">
      <h1>Billing</h1>
      <span>{(userData != null) ? `${userData.phone.substring(9)} Token` : ""} </span>
      <button className='base-btn' onClick={handleShow}>token váltás</button>

      <Modal show={modalShow} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Token átvátása ({userData?.phone.substring(9)})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li onClick={handleSave} className='li-changed-option'>Felhasználom a számlánál</li>
            <li onClick={handleSave} className='li-changed-option'>Tárcához adom</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bezár
          </Button>

        </Modal.Footer>
      </Modal>

    </header>
  )

}
export default BilllingHeader