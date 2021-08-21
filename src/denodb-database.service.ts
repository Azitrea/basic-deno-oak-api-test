import { Database, MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';
import { UserDao } from "./models/user.model.ts";

const connector = new MySQLConnector({
  database: 'homebase',
  host: '127.0.0.1',
  username: 'root',
  password: 'password123',
  port: 3306, // optional
});

const db = new Database(connector);

db.link([UserDao]);

export default db;
