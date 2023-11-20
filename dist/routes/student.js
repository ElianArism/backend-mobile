"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const studentRoutes = (0, express_1.Router)();
studentRoutes.get('/:professorDNI', student_1.getStudents);
exports.default = studentRoutes;
//# sourceMappingURL=student.js.map