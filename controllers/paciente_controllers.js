import { Paciente } from '../models/Paciente.js'

// Cuando se crea un nuevo cliente
const nuevo_cliente = async (req, res, next) => {

     // crear un objeto de paciente con datos del body
     const paciente = new Paciente(req.body)

     // Body parser
     try {
          await paciente.save();

          res.json({ Mensaje: 'El cliente se agregó correctamente' });
          next()
     } catch (error) {
          console.log(error);
          next();
     }
}

// Obtiene todos los pacientes
const obtener_pacientes = async (req, res, next) => {
     try {
          const pacientes = await Paciente.find({});
          res.json({ pacientes })
     } catch (error) {
          console.log(error);
          next();
     }
}

// Obtiene un paciente en especifico
const obtener_paciente = async (req, res, next) => {
     try {
          const paciente = await Paciente.findById(req.params.id);
          res.json(paciente);
     }catch(error){
          console.log(error);
          next();
     }
}

// Actualizar paciente
const actualizar_paciente = async (req, res, next) => {
     try {
          const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
               new: true
          });
          res.json(paciente);
     } catch (error) {
          console.log(error);
          next();
     }
}

const eliminar_paciente = async (req, res, next) => {
     try {
          await Paciente.findOneAndDelete({_id : req.params.id});
          res.json({Mensaje: 'Eliminado correctamente'});
     } catch (error) {
          console.log(error);
          next();
     }
}

export {
     nuevo_cliente,
     obtener_pacientes,
     obtener_paciente,
     actualizar_paciente,
     eliminar_paciente
}