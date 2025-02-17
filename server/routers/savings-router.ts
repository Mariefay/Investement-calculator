//Express
import { Router } from "express";
//Controllers
import { getSavings } from "../controllers/savings-controllers";
//Errors
import { send405Error } from "../errors/index";

export const savingsRouter = Router();

savingsRouter.route("/").get(getSavings).all(send405Error);
