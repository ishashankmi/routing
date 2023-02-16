import { Router } from "express";
import { UserRouter } from "./api/v1/user/index.js";
const Routes = Router();

Routes.use("/user", UserRouter);

export { Routes };
