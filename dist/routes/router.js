"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const classroom_1 = __importDefault(require("./classroom"));
const student_1 = __importDefault(require("./student"));
const subject_1 = __importDefault(require("./subject"));
const appRouter = (0, express_1.Router)();
appRouter.use('/auth', auth_1.default);
appRouter.use('/subject', subject_1.default);
appRouter.use('/classroom', classroom_1.default);
appRouter.use('/student', student_1.default);
exports.default = appRouter;
//# sourceMappingURL=router.js.map