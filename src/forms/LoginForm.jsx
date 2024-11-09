import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "tanvir@gmail.com", password: "12345678" };
    const found =
      user.email === formData.email && user.password === formData.password;
    if (!found) {
      setError("root.random", {
        message: `User with  email ${formData.email} is not found`,
        type: "form",
      });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`border w-80 rounded-sm px-5 py-3 outline-teal-500 ${
                errors.email
                  ? "placeholder:text-red-500 border-red-500 focus:outline-red-500"
                  : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email..."
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be at 8 characters.",
                },
              })}
              className={`border w-80 rounded-sm px-5 py-3 outline-teal-500 ${
                errors.password
                  ? "placeholder:text-red-500 border-red-500 focus:outline-red-500"
                  : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your password."
            />
          </Field>
        </FieldSet>
        <div className="text-xs text-red-500">
          {errors?.root?.random?.message}
        </div>
        <Field>
          <button className="text-md bg-teal-400 text-white px-5 py-2 rounded-sm w-36 m-auto">
            Log-in
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
