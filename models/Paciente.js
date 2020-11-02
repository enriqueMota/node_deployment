import mongoose from 'mongoose';
const { Schema } = mongoose;
// schema vendria siendo una tabla

export const pacientes_schema = new Schema({
     nombre:{
          type: String,
          // trim elimina los espacios en blanco de un registro
          trim: true
     },
     propietario: {
          type: String,
          trim: true
     },
     fecha: {
          type: String,
          trim: true
     },
     telefono: {
          type: String,
          trim: true
     },
     hora: {
          type: String,
          trim: true
     },
     sintomas: {
          type: String,
          trim: true
     }
});

// export default pacientes_schema;
export const Paciente = mongoose.model('Paciente', pacientes_schema);

// export default mongoose.model('Paciente', pacientes_schema);
