const { z } = require("zod");

// Enum definitions
const UserRoleEnum = z.enum(["USER", "ADMIN"]);
const UserStatusEnum = z.enum(["ACTIVE", "BLOCKED", "DELETED"]);

const UserSchema = z.object({
  body: z.object({
    email: z.string().email(), // Email
    name: z.string({ required_error: "name is required" }),
    password: z.string().min(8), // Ensure password has at least 8 characters
    role: UserRoleEnum.default("USER"), // Default role is USER
    status: UserStatusEnum.default("ACTIVE"), // Default status is ACTIVE
    profilePhoto: z.string().url().optional(),
    isVerified: z.boolean().default(false),
  }),
});

const IsVerifiedSchema = z.object({
  body: z.object({
    id: z.number(),
    isVerified: z.boolean(),
  }),
});

module.exports = {
  UserValidationSchema: {
    UserSchema,
    IsVerifiedSchema,
  },
};
