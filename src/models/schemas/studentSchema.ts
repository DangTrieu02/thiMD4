
import { Schema, model } from "mongoose";


interface IStudent {
    studentname?:string
    studentid?:string
    scorelt?:number
    scoreth?:number
        access?:string
        description?:string
        class?:string

}

const studentSchema = new Schema<IStudent>({
    studentname:String,
    studentid:String,
    scorelt:Number,
    scoreth:Number,
    access:String,
    description:String,
    class:String
})

const StudentModel = model<IStudent>('student', studentSchema);

export { StudentModel };
