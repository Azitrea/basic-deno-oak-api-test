import { Client } from "https://deno.land/x/mysql/mod.ts";
import { DATABASE, TABLE } from "../models/database.model.ts";

const client = await new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "password123", // https://github.com/denodrivers/mysql/issues/37
  db: "",
});

export const run = async () => {
  console.log('Database cleanup');
  // create database (if not created before)
  await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
  // select db
  await client.execute(`USE ${DATABASE}`);

  // delete table if it exists before
  // await client.execute(`DROP TABLE IF EXISTS ${TABLE.USER}`);

  // create table
  await client.execute(`
    CREATE TABLE IF NOT EXISTS ${TABLE.USER} (
        id int(11) NOT NULL AUTO_INCREMENT,
        username varchar(50) NOT NULL,
        password varchar(100) NOT NULL,
        name varchar(50) NOT NULL,
        address varchar(100),
        birthDate DATE,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `);
};

run();

export default client;