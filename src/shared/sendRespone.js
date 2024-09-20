const sendResponse = (res, jsonData) => {
  res.status(jsonData.status).json({
    success: jsonData.success,
    status: jsonData.status,
    message: jsonData.message,
    meta: jsonData.meta || null,
    data: jsonData.data || null,
  });
};

module.exports = sendResponse;
