
import { AllowNull, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "products", timestamps: false,})
export default class ProductModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column({AllowNull})
    declare name: string;

}