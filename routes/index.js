import express from 'express';
const router = express.Router();
import { 
     
     nuevo_cliente, 
     obtener_pacientes,
     obtener_paciente,
     actualizar_paciente,
     eliminar_paciente

} from '../controllers/paciente_controllers.js'

// Guardar un cliente nuevo
router.post('/pacientes', nuevo_cliente);

// Listar todos los pacientes
router.get('/pacientes', obtener_pacientes);

// Obtener un cliente en especifico
router.get('/pacientes/:id', obtener_paciente);

// Actualizar registro
router.put('/pacientes/:id', actualizar_paciente);

// Elimina un paciente por el id
router.delete('/pacientes/:id', eliminar_paciente);

export default router;