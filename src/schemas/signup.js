import { object, ref, string } from "yup";

const signupSchema = object({
  first_name: string().required("First name is required."),
  last_name: string().required("Last name is required."),
  email: string().required("Email is required.").email("Invalid email."),
  phone_number: string().required("Phone number is required."),
  password: string().required("Password is required."),
  confirm_password: string()
    .required("Confirm password is required.")
    .oneOf([ref("password")], "Passwords do not match."),
});

export default signupSchema;
