import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/test", async (req, res) => {
  const user = await User.create({
    name: "Rafa",
    email: "rafael.destri@gmail.com",
    password_hash: "123123",
  });

  res.json(user);
});

export default routes;
