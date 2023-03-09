"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
let studentController = new studentController_1.StudentController();
const routers = express_1.default.Router();
routers.get('/', studentController.index);
routers.get('/info/:id', studentController.showInfo);
routers.get('/create', studentController.showCreate);
routers.post('/create', studentController.create);
routers.get('/delete/:id', studentController.delete);
routers.post('/update/:id', studentController.update);
routers.get('/showFormUpdate/:id', studentController.showUpdate);
exports.default = routers;
//# sourceMappingURL=routers.js.map