import { Router } from "express";
import {
  addAdmin,
  createCourse,
  editCourse,
  getCourses,
  loginAdmin,
  removeCourse,
} from "../controllers/adminControllers";
const router = Router();

router.post("/signup", addAdmin);
router.post("/login", loginAdmin);

// router.use(validateAdmin);
router.route("/courses").get(getCourses).post(createCourse);
router.route("/courses/:courseId").put(editCourse).delete(removeCourse);

export default router;
