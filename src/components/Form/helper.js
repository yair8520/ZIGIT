const isValidData = {
  email: { rgx: /\S+@\S+\.\S+/, message: "Not a Valid Email" },
  password: {
    rgx: /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/,
    message: `Password is 8 characters long.
      must contain at least one uppercase letter And one number`,
  },
};
module.exports = { isValidData };
