
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './PopupC.css'

const PopupCu =( )=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {title,settitle}=useState('');
    const {address,setaddress}=useState('');
    const {pho,setpho}=useState('');
    const {city,setcity}=useState('');
    const {email,setemail}=useState('');
return(
    <>
    <Button variant="primary" id ="add" onClick={handleShow}>
    Add Customer +</Button>

    <Modal 
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Customer Details:</Modal.Title>
      </Modal.Header>
      <Modal.Body  >
      <div className='body'> 
   <form className='form-style'>
     <label className='lab'> Username :</label>
     <input value={settitle} onChange={(e)=>settitle(e.target.value)} name='title' type="text" id="title" placeholder='Add Name'/>
     <div className='flex'></div>
    <label className='emaill'> E-mail :</label>
     <input value={setemail} onChange={(e)=>setemail(e.target.value)} name='email' type="text" id="email" placeholder='ex:myname@example.com'/>
     <div className='flex'></div>
     <label className='addres'> Address :</label>
     <input value={setaddress} onChange={(e)=>setaddress(e.target.value)} name="addres" id="address" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='phone'> Phone Number :</label>
     <input value={setpho} onChange={(e)=>setpho(e.target.value)} name="phone" id="phonen" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='city'> City :</label>
     <input value={setcity} onChange={(e)=>setcity(e.target.value)} name="city" id="citty" />

    

     <div className='flex'></div>
      <label for="cat-select" className='lab'> Gender :</label>
      <select name="rest" id="rest">
          <option value="women">Male</option>
          <option value="women">Female</option>
          </select>

     <div className='flex'></div>
      <label for="cat-select" className='lab'> Interest :</label>
      <select name="rest" id="rest">
          <option value="">Sport</option>
          <option value="women">Clothing</option>
          <option value="men">Shoes</option>
          <option value="kids">Accessorie</option>
          <option value="hime">Home & Pets</option>
          <option value="beauty">Beauty</option>
     </select>

     <div className='flex'></div>
   </form>        
   </div>
  

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button  variant="primary"  >Save </Button>
      </Modal.Footer>
    </Modal>
  </>
)


}

export default PopupCu