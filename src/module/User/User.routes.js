const express = require("express");
const validateRequest = require("../../middleware/validateRequest");
const { UserValidationSchema } = require("./User.validation");
const { CreateUser } = require("./User.controller");

const router = express.Router();

router.post(
  "/create_user",
  validateRequest(UserValidationSchema.UserSchema),
  CreateUser
);

module.exports = { UserRouter: router };
