const fs = require("fs");
const path = require("path");
const sqlite = require("sqlite3");
const { app } = require("electron");

const DATABASE_PATH = path.join(app.getPath("userData"), "database.sqlite");

if (!fs.existsSync(DATABASE_PATH)) {
  // eslint-disable-next-line
  let db = new sqlite.Database(DATABASE_PATH, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`DATABASE CREATED [${fs.existsSync(DATABASE_PATH)}]`);
  });
}

module.exports = {
  development: {
    dialect: "sqlite",
    storage: DATABASE_PATH,
  },
  test: {
    dialect: "sqlite",
    storage: DATABASE_PATH,
  },
  production: {
    dialect: "sqlite",
    storage: DATABASE_PATH,
  },
};
