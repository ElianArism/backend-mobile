import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import {DB} from '../connection';
import {classroomTableName} from './Classroom';
import {studentTableName} from './Student';
import {subjectTableName} from './Subject';

export const tableNameStudentTakesSubject = 'student_takes_subject';

class StudentTakesSubject extends Model<
  InferAttributes<StudentTakesSubject>,
  InferCreationAttributes<StudentTakesSubject>
> {
  declare id_student_takes_subject: number;
  declare studentDNI: number;
  declare subjectCode: number;
  declare classroomCode: number;
}

StudentTakesSubject.init(
  {
    id_student_takes_subject: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentDNI: {
      type: DataTypes.INTEGER,
      references: {
        model: studentTableName,
        key: 'dni',
      },
    },
    subjectCode: {
      type: DataTypes.INTEGER,
      references: {
        model: subjectTableName,
        key: 'subjectCode',
      },
    },
    classroomCode: {
      type: DataTypes.INTEGER,
      references: {
        model: classroomTableName,
        key: 'classroomCode',
      },
    },
  },
  {
    sequelize: DB.connection,
    timestamps: false,
    tableName: tableNameStudentTakesSubject,
  }
);

export default StudentTakesSubject;
