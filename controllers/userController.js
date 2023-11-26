// @desc Register user
// @route POST /api/user/register
// @access public
export const registerUser = (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    throw new Error("All fields are mandatory");
  }

  // more logic after DB 
};
