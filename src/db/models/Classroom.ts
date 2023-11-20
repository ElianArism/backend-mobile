import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import {DB} from '../connection';

import {schedulerTableName} from './Scheduler';
import StudentTakesSubject from './StudentTakesSubject';

export const classroomTableName = 'classrooms';

class Classroom extends Model<
  InferAttributes<Classroom>,
  InferCreationAttributes<Classroom>
> {
  declare classroomsCode: number;
  declare name: string;
  declare schedulerCode: number;
}

Classroom.init(
  {
    classroomsCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    schedulerCode: {
      type: DataTypes.INTEGER,
      references: {
        key: 'schedulerCode',
        model: schedulerTableName,
      },
    },
  },
  {sequelize: DB.connection, timestamps: false, tableName: classroomTableName}
);

Classroom.hasMany(StudentTakesSubject, {foreignKey: 'classroomsCode'});

export default Classroom;
