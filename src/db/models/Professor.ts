import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import {DB} from '../connection';
import Subject from './Subject';

export const professorTableName = 'professors';

class Professor extends Model<
  InferAttributes<Professor>,
  InferCreationAttributes<Professor>
> {
  declare dni: number;
  declare name: string;
  declare lastName: string;
  declare birthDate: string;
  declare password: string;
}

Professor.init(
  {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {sequelize: DB.connection, timestamps: false, tableName: professorTableName}
);

Professor.hasMany(Subject);

export default Professor;
