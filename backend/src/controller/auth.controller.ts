import { type Request, type Response } from "express";
import { validationResult } from "express-validator";

export const Login = (req: Request, res: Response) => {
  res.json({
    message: "login",
  });
};

export const Register = (req: Request, res: Response) => {
  res.json({
    message: "register",
  });
};
