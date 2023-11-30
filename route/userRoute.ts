import { Router } from "express";
import {
  VerifyUser,
  createUser,
  getOneUser,
  signIn,
  updateOneUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/get-one-user/:userID").get(getOneUser);
router.route("/create-User").post(createUser);

router.route("/sign-in-user").post(signIn);
router.route("/update-one-user/:userID").patch(updateOneUser);
router.route("/verify-user").patch(VerifyUser);

export default router;
