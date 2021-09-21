const UserController = require("../controllers/UserController");
const { authentication, authorization } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User Profile Service");
});

router.post("/register", UserController.createUser);
router.post("/login", UserController.login);

router.use(authentication);
router.get("/user", UserController.getUsers);
router.use("/user/:id", authorization);
router.get("/user/:id", UserController.findUser);
router.patch("/user/:id", UserController.patchUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
