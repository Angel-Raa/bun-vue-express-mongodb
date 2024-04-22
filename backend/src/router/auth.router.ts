import express from "express";
import { Login, Register } from "../controller/auth.controller";
import { body } from "express-validator";
import { validation } from "../middlewares/validation";

const router = express.Router();

router.post(
  "/login",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Formato de email incorrecto")
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  validation,
  Login
);

router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("El nombre es obligatorio"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Formato de email incorrecto")
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  validation,
  Register
);
export default router;
