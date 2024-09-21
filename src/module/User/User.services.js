const { bcrypt_salt_rounds } = require("../../config/index");
const db = require("../../mysqldatabase/mysql");

// CreateUserIntoDb.js
bcrypt = require("bcryptjs");
const CreateUserIntoDb = async (payload) => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(bcrypt_salt_rounds)
  );
  const isVerified = payload.role === "USER" ? false : true;
  const query = `
    INSERT INTO users (name, email, password, role, profilePhoto, status, isVerified)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    payload.name,
    payload.email, // email
    payload.password, // password
    payload.role, // role
    payload.profilePhoto, // profilePhoto
    payload.status, // status
    isVerified, // isVerified
  ];
  // create Account
  const result = await new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        return reject(err); // If an error occurs, reject the promise
      }

      resolve(results); // Resolve the promise with query results
    });
  });
  console.log(result);

  const specificUserQuery = "SELECT * FROM users WHERE email = ?";
  const speificUserData = await new Promise((resolve, reject) => {
    db.query(specificUserQuery, [payload.email], (err, result) => {
      if (err) {
        return reject(err); // If an error occurs, reject the promise
      }
      if (result.length === 0) {
        return reject(new Error("No user found with this email")); // Handle case when no user is found
      }
      resolve(result); // Resolve the promise with query results
    });
  });

  console.log(speificUserData);

  return payload;
};

module.exports = {
  CreateUserIntoDb,
};
