import express from 'express';
import { createInfoProf, deleteInfoProf, getInfoProf, updateInfoProf } from '../controllers/infoProfController.js';

const routes = express.Router();

routes.get('/info', getInfoProf);
routes.post('/info', createInfoProf);
routes.put('/info/:id', updateInfoProf);
routes.delete('/info/:id', deleteInfoProf);

export default routes;