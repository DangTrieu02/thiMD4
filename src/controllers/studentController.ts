import {StudentModel} from "../models/schemas/studentSchema";
import{Request, Response} from "express";

export class StudentController {

    async index(req:Request, res:Response){

        try {
        let student = await StudentModel.find({}).sort({scorelt:1});
        if  (student){
            res.render('home',{student:student})
        }
        }catch(e){
            console.log(e.message)
        }
    }
    showCreate = (req, res) => {
        res.render("create1");
    };

    create = (req:Request, res:Response) => {
        let student = {
            studentname: req.body.studentname,
            studentid: req.body.studentid,
            scorelt: req.body.scorelt,
            scoreth: req.body.scoreth,
            access: req.body.access,
            description: req.body.description,
            class: req.body.class
        };
        console.log(student)
        StudentModel.insertMany(student);
        res.redirect("/");
    };

    async showInfo(req:Request,res:Response){
        let studentid = req.params.id;
        let info= await StudentModel.findOne({_id:studentid})
        res.render("info", {info: info});
    }
    async delete(req:Request,res:Response){
        let studentid = req.params.id;
        await StudentModel.deleteOne({ _id:studentid })
            .then(()=>{
                res.json({success:'oke'})
            })
            .catch(err =>{
                res.status(400).json({message: "loi qua loi roi"+err});
            })

    }
    async update(req:Request,res:Response){
            let studentid = req.params.id;

            const student = await StudentModel.findOne({ _id: studentid });
            student.studentname= req.body.studentname;
            student.studentid=req.body.studentid;
            student.scorelt=req.body.scorelt;
            student.scoreth=req.body.scoreth;
            student.access=req.body.access;
            student.description=req.body.description;
            student.class=req.body.class;
            await student.save();


            if(student){
                res.json('success')
            }

    }
    async showUpdate(req:Request, res:Response){
        let studentid= req.params.id;
        let student= await StudentModel.findOne({_id: studentid})
        res.render("update", {student: student});
    };

}
