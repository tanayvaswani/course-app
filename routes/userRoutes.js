import { Router } from "express";
const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", userProfile);

export default router;
