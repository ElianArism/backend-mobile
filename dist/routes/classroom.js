"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classroom_1 = require("../controllers/classroom");
const classroomRoutes = (0, express_1.Router)();
classroomRoutes.get('/', classroom_1.getClassrooms);
classroomRoutes.put('/', classroom_1.assignClassroom);
exports.default = classroomRoutes;
//# sourceMappingURL=classroom.js.map