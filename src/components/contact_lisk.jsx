
import React, {useState} from 'react';
import { Contact } from '../models/contact.class';
import ContactComponet from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import '../styles/contact_lisk.css'

const ContactLisk = () => {

  const contact1 = new Contact('Joe', 'Martinez', 'joe@email.com', false);
  const contact2 = new Contact('Martín', 'San José', 'martin@email.com', true);
  const contact3 = new Contact('Karina', 'Rosales', 'karina@email.com', true);

  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  /**
   * If we clicked on the icon from the connected or disconneted, we
   * can chance the status
   */

  function userChange(user) {
    const index = contacts.indexOf(user);
    const tempInfo = [...contacts];
    tempInfo[index].connected = !tempInfo[index].connected;
    setContacts(tempInfo);
  }

  /**
   * We remove any user
   */

  function userRemove(user) {
    const index = contacts.indexOf(user);
    const tempInfo = [...contacts];
    tempInfo.splice(index, 1);
    setContacts(tempInfo);
  }

  /**
   *  Add the user (contact) from the form component
   */

  function addContact(user) {
    const tempUsers = [...contacts];
    tempUsers.push(user)
    setContacts(tempUsers)
  }

  /**
   *  We verify if there is a user or not 
   */

  function displayComponents () {

      if (contacts.length == 0) {
        return ( <h2 className='contact-subtitle'> There is no user </h2> )
      }
      
      else {
        return (
          contacts.map((contact, index) => {
            return(
              <ContactComponet
                key = {index}
                contact= {contact}
                user = {userChange}
                remove = {userRemove}
                >
      
              </ContactComponet>
            )
          })
        )
      }
  
  }

  return (
    <div className='contact-container'>
      <h2 className='contact-title'> Contact Info </h2>

      <div className='grid'>
        
        <div className='grid-row'>
          <h3> Name </h3>
          <h3> Lastname </h3>
          <h3> Email </h3>
          <h3> Connected </h3>
          <h3> Remove </h3>
        </div>

        <div> 
          
          {
            displayComponents ()
          }

        </div>

      </div>

      <ContactForm add={addContact}></ContactForm>

    </div>
  );
}

export default ContactLisk;
