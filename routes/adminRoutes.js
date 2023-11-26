import { Router } from "express";
const router = Router();

router.use(validateAdmin);
router.get(getAllCourses).post(createCourse);
router.get(getParticularCourse).put(editCourse).delete(removeCourse);

export default router;
