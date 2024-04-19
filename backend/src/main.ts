import express from "express";
import "./database/connected";
import router from "./router/auth";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/v1/", router);
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});
app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);
