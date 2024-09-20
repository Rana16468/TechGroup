const express = require("express");
const { UserRouter } = require("../module/User/User.routes");

const router = express.Router();

const moduleRoutes = [
  { path: "/user", route: UserRouter },
  // { path: "/auth", route: router },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
