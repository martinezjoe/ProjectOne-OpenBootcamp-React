
import React from 'react';
import { Contacto } from '../models/contact.class';
import ComponentB from './component-b';



export const ComponentA = () => {

    const contactoNuevo = new Contacto('Joe', 'Martinez', 'joe@correo.com', true)

    return (
        <div>
            
        <ComponentB contacto={contactoNuevo}></ComponentB>

        </div>
    );
};






