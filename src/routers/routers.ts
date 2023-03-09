import express from 'express';
import {StudentController} from "../controllers/studentController";
let studentController = new StudentController();
const routers = express.Router();


routers.get('/',studentController.index)
routers.get('/info/:id',studentController.showInfo)
routers.get('/create', studentController.showCreate)
routers.post('/create', studentController.create)
routers.get('/delete/:id', studentController.delete)
routers.post('/update/:id', studentController.update)
routers.get('/showFormUpdate/:id',studentController.showUpdate)

export default routers