import { Router } from "express";
import { UserHandler } from "../../../../controller/index.js";

const user = Router();

user.get("/", UserHandler);

export { user };
