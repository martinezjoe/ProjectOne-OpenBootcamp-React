import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactForm = ({add}) => {


  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const connectedRef = useRef();

  function addContact (e) {
    e.preventDefault();
    const newContact = new Contact (
      nameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value,
      true
    );

    add(newContact)

  }


  return (
      <div>
        <h2> Add a new contact </h2>
        <form onSubmit={addContact} className='contact-form'>

          <div className='contact-form-inputs'>

            <input
              ref = {nameRef}
              id = 'inputName'
              type= 'text'
              placeholder='Insert your name'
              className='input'
              required
            />

            <input
              ref = {lastnameRef}
              id = 'inputLastname'
              type= 'text'
              placeholder='Insert your Lastname'
              className='input'
              required
            />

            <input
              ref = {emailRef}
              id = 'inputEmail'
              type= 'email'
              placeholder='Insert your email'
              className='input'
              required
            />

            {/* <label htmlFor='selectConnected'> Are he/she connected ?</label>

            <select 
              ref={connectedRef} 
              defaultValue = 'connected' 
              id='selectConnected'>

              <option value={'true'}>
                Yes
              </option>

              <option value={'false'}>
                No
              </option>

            </select>      */}
          </div>

          <button 
            type='submit'
            > 
            Add
          </button>

        </form>
            
      </div>
  );
};


ContactForm.propTypes = {
  add: PropTypes.func.isRequired
};


export default ContactForm;
