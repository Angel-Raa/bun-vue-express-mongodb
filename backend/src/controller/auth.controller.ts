import { type Request, type Response } from "express";
import { User } from "../models/User";

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
        status: false,
      });
    }

    const isMatch = user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Credencial incorrecta",
        status: false,
      });
    }

    res.json({
      message: "Usuario logueado",
      status: true,
    });
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({
      message: "Error al iniciar sesión",
      status: false,
    });
  }
};

export const Register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    let user = new User({ name, email, password });
    await User.findOne({ email });
    if (user) {
      res.json({
        message: "El usuario ya existe",
        status: false,
      });
    }
    await user.save();
    res.json({
      message: "Usuario registrado",
      status: true,
    });
  } catch (error: any) {
    throw new Error("Error al registrar el usuario");
  }
};
