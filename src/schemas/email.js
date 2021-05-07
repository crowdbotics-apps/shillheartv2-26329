import { object, string } from "yup";

const emailSchema = object({
  email: string().required("Email is required.").email("Invalid email."),
});

export default emailSchema;
