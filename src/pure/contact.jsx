
import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
// We import the icons 
import { BsTrash } from 'react-icons/bs/';
import { FiUserCheck, FiUserX } from 'react-icons/fi/';



const ContactComponet = ({contact, key, user, remove}) => {

      
  /**
    * Depending if the user is connected or disconnected
    * we will use a bagde 
    */

  function userConneted() {
    switch(contact.connected) {
      case true:
        return(
          <h3 className='contact-connected'> 
          On <FiUserCheck> </FiUserCheck>
          </h3>
        )
      case false:
        return(
          <h3 className='contact-disconnected'> 
          Off <FiUserX></FiUserX>
          </h3>
        )
        default:
          break;
    }
  }
    
   return (
    <div className='grid-row'>
      <h3> { contact.name } </h3>
      <h3> { contact.lastname }</h3>
      <h3> { contact.email } </h3>
      <h3 
        onClick={() => user(contact) }> 
        { userConneted() } 
      </h3>
      <h3 
      className='icon'
      onClick={() => remove(contact)}> 
        <BsTrash></BsTrash> 
      </h3>
  </div>
    );
};


ContactComponet.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  user: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default ContactComponet;
