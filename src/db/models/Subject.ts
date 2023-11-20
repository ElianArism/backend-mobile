import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import {DB} from '../connection';
import {professorTableName} from './Professor';
import StudentTakesSubject from './StudentTakesSubject';

export const subjectTableName = 'subject';

class Subject extends Model<
  InferAttributes<Subject>,
  InferCreationAttributes<Subject>
> {
  declare subjectCode: number;
  declare name: string;
  declare professorDNI: number;
}

Subject.init(
  {
    subjectCode: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    professorDNI: {
      type: DataTypes.INTEGER,
      references: {
        model: professorTableName,
        key: 'dni',
      },
    },
  },
  {sequelize: DB.connection, timestamps: false, tableName: subjectTableName}
);

Subject.hasMany(StudentTakesSubject, {foreignKey: 'subjectCode'});

export default Subject;
