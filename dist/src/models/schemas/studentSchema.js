"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    studentname: String,
    studentid: String,
    scorelt: Number,
    scoreth: Number,
    access: String,
    description: String,
    class: String
});
const StudentModel = (0, mongoose_1.model)('student', studentSchema);
exports.StudentModel = StudentModel;
//# sourceMappingURL=studentSchema.js.map