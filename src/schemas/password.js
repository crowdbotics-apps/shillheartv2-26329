import { object, string, ref } from "yup";

const passwordSchema = object({
  password: string().required("Password is required."),
  confirm_password: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords do not match."),
});

export default passwordSchema;
