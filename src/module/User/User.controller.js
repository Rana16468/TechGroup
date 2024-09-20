const httpStatus = require("http-status");
const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendRespone");
const { CreateUserIntoDb } = require("./User.services");

const CreateUser = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await CreateUserIntoDb(data);
  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Successfully Created Account",
    data: result,
  });
});

module.exports = {
  CreateUser,
};
