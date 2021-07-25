import { Sequelize } from 'sequelize-typescript';
import { Etablissement } from '../etablissement/etablissement.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'etablissements',
      });
      sequelize.addModels([Etablissement]);
      //await sequelize.sync();
      return sequelize;
    },
  },
];
