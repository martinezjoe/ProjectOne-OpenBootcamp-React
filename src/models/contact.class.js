

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    connected = false;

    constructor(name, lastname, email, connected) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected
    }
}