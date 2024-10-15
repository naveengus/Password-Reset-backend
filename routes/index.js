import express from "express";
import usersRoutes from "./users.js";
const router = express.Router();

router.get("/", (req, res) =>
  res.send("<h1>project tracker</h1><p>well come, Its working Good</p>")
);
router.use("/users", usersRoutes);
export default router;
