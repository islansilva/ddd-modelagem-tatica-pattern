
import { Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "products", timestamps: false,})
export default class ProductModel extends Model {

    @PrimaryKey
    @Col
    declare id: string;


}