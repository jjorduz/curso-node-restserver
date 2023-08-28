const {Schema, model} = require('mongoose');

const UsuarioShema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String
        
    },
    rol: {
        type: String,
        required:true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado: {
        type: Boolean,
        required: true
    },
    google: {
        type: Boolean,
        required: false 
    },

});

UsuarioShema.methods.toJSON = function() {
    const{__v, password, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuario',UsuarioShema);
