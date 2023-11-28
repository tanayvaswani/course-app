import { Router } from "express";
const router = Router();

router.post("/signup", addUser);
router.post("/login", loginUser);

router.route("/courses").get(allCourses);
router.route("courses/:courseId").post(purchaseCourse);
router.route("/purchasedCourses").get(purchasedCourses);

export default router;
