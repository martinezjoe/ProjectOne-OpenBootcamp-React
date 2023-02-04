
import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';


const ComponentB = ({contacto}) => {
    return (
        <div>
            
            <h2>
                Nombre: {contacto.name}
            </h2>

            <h3>
                Apellido: {contacto.lastname} 
            </h3>

            <h4>
                Email: {contacto.email}
            </h4>

            <h4>
                Conectado: {contacto.connected ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h4>

        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
