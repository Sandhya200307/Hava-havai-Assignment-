import { createConnection } from 'typeorm';

export const connection = createConnection({
  type: 'postgres',
  url: 'localhost:5432',
  username: 'your_username',
  password: 'your_password',
  database: 'hava_havai',
  entities: [__dirname + '/../entity/*.*'],
  synchronize: true,
});
