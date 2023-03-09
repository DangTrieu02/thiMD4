"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const studentSchema_1 = require("../models/schemas/studentSchema");
class StudentController {
    constructor() {
        this.showCreate = (req, res) => {
            res.render("create1");
        };
        this.create = (req, res) => {
            let student = {
                studentname: req.body.studentname,
                studentid: req.body.studentid,
                scorelt: req.body.scorelt,
                scoreth: req.body.scoreth,
                access: req.body.access,
                description: req.body.description,
                class: req.body.class
            };
            console.log(student);
            studentSchema_1.StudentModel.insertMany(student);
            res.redirect("/");
        };
    }
    async index(req, res) {
        try {
            let student = await studentSchema_1.StudentModel.find({}).sort({ scorelt: 1 });
            if (student) {
                res.render('home', { student: student });
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async showInfo(req, res) {
        let studentid = req.params.id;
        let info = await studentSchema_1.StudentModel.findOne({ _id: studentid });
        res.render("info", { info: info });
    }
    async delete(req, res) {
        let studentid = req.params.id;
        await studentSchema_1.StudentModel.deleteOne({ _id: studentid })
            .then(() => {
            res.json({ success: 'oke' });
        })
            .catch(err => {
            res.status(400).json({ message: "loi qua loi roi" + err });
        });
    }
    async update(req, res) {
        let studentid = req.params.id;
        const student = await studentSchema_1.StudentModel.findOne({ _id: studentid });
        student.studentname = req.body.studentname;
        student.studentid = req.body.studentid;
        student.scorelt = req.body.scorelt;
        student.scoreth = req.body.scoreth;
        student.access = req.body.access;
        student.description = req.body.description;
        student.class = req.body.class;
        await student.save();
        if (student) {
            res.json('success');
        }
    }
    async showUpdate(req, res) {
        let studentid = req.params.id;
        let student = await studentSchema_1.StudentModel.findOne({ _id: studentid });
        res.render("update", { student: student });
    }
    ;
}
exports.StudentController = StudentController;
//# sourceMappingURL=studentController.js.map