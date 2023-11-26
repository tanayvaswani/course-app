export const addAdmin = (req, res) => {
  res.status(200).json({ message: "Add admin" });
};

export const loginAdmin = (req, res) => {
  res.status(200).json({ message: "Login Admin" });
};

export const getCourses = (req, res) => {
  res.status(200).json({ message: "Get courses" });
};

export const createCourse = (req, res) => {
  res.status(200).json({ message: "Add a course" });
};

export const editCourse = (req, res) => {
  res.status(200).json({ message: "Edit a course" });
};

export const removeCourse = (req, res) => {
  res.status(200).json({ message: "Delete a course" });
};
