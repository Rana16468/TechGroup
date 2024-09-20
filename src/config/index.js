const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_authentication_secret: process.env.JWT_AUTHENTICATION_SECRET,
  jwt_authentication_token_expire_in:
    process.env.JWT_AUTHENTICATION_TOKEN_EXPIRE_IN,
  web_site_authentication_link: process.env.WEB_SITE_AUTHENTICATION__LINK,
  email_sender: {
    email: process.env.NODEMAILER_EMAIL,
    app_password: process.env.NODEMAILER_PASSWORD,
  },
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  token_expire_in: process.env.JWT_EXPIRE_IN,
  reset_password_token: process.env.RESET_PASSWORD_TOKEN,
  reset_password_expire_in: process.env.RESET_PASSWORD_EXPIRE_IN,
};
