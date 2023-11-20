import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
export declare class Professor extends Model<InferAttributes<Professor>, InferCreationAttributes<Professor>> {
    dni: number;
    name: string;
    lastName: string;
    birthDate: string;
    password: string;
}
