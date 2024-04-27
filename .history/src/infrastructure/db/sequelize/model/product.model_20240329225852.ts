
import { Model, Table } from "sequelize-typescript";

@Table({tableName: "products", timestamps})
export default class ProductModel extends Model {

}