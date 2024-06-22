export const ValidateRules = {
  isRequired: {
    value: true,
    message: "This field is required",
  },
  isEmailPattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
};
