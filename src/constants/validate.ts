export const ValidateRules = {
  isRequired: {
    value: true,
    message: "This field is required",
  },
  isEmailPattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
  isPhonePattern: {
    value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    message: "Invalid phone number",
  },
};
