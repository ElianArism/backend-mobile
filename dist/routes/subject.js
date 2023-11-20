"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = require("../controllers/subject");
const subjectRoutes = (0, express_1.Router)();
subjectRoutes.get('/:professorDNI', subject_1.getSubjectsByProfessorDNI);
exports.default = subjectRoutes;
//# sourceMappingURL=subject.js.map