import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import {DB} from '../connection';
import Classroom from './Classroom';

export const schedulerTableName = 'scheduler';

class Scheduler extends Model<
  InferAttributes<Scheduler>,
  InferCreationAttributes<Scheduler>
> {
  declare schedulerCode: number;
  declare startTime: string;
  declare endTime: string;
  declare day: string;
}

Scheduler.init(
  {
    schedulerCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    day: DataTypes.STRING,
  },
  {sequelize: DB.connection, timestamps: false, tableName: schedulerTableName}
);

Scheduler.hasMany(Classroom, {foreignKey: 'schedulerCode'});

export default Scheduler;
