import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import {DB} from '../connection';
import StudentTakesSubject from './StudentTakesSubject';

export const studentTableName = 'students';

class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  declare dni: number;
  declare name: string;
  declare lastName: string;
  declare birthDate: string;
}

Student.init(
  {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.STRING,
  },
  {sequelize: DB.connection, timestamps: false, tableName: studentTableName}
);

Student.hasMany(StudentTakesSubject);

export default Student;
