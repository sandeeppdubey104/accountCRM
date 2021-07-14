/* eslint-disable no-console */
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import App from "src/app";
import { intJwtMaker } from "./helpers/jwt-helper";
import setupHttpsDevServer from "./lib/ssl";

// ENV LOAD
const envFile = path.resolve("./.env");

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log("env loaded");
} else {
  console.error("cannot load env");
}

const { HTTP_PORT } = process.env;

const { jwtSecret, jwtExpire } = (process as any).env;

intJwtMaker(jwtSecret, jwtExpire);

const appInstance = new App().init();

setupHttpsDevServer({
  app: appInstance,
  httpPort: Number(HTTP_PORT),
});
