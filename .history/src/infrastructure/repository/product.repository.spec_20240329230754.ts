import { Sequelize } from "sequelize-typescript";

describe("Product repository test", () => {


    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: {force: true},
        })
    })

    sequelize.addModels([])

    afterEach(async () => {
        await sequelize.close;
    })

})