import { Router } from "express";
const router = Router();

router.post("/signup", addUser);
router.post("/login", loginUser);

router.route("/courses").get(getPublishedCourses);

router.route("course/:courseId").put(purchaseCourse);
