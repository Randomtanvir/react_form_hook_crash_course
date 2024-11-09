import { useFieldArray, useForm } from "react-hook-form";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Full Name" error={errors.fName}>
            <input
              {...register("fName", { required: "Full Name is required." })}
              className={`border w-[300px] rounded-sm px-5 py-3 outline-teal-500 ${
                errors.fName
                  ? "placeholder:text-red-500 border-red-500 focus:outline-red-500"
                  : "border-gray-200"
              }`}
              type="text"
              name="fName"
              id="fName"
              placeholder="Enter Your Full Name"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required.",
                max: {
                  value: 100,
                  message: "Age must be between 16 - 100",
                },
                min: {
                  value: 16,
                  message: "You are Little",
                },
              })}
              className={`border w-[300px] rounded-sm px-5 py-3 outline-teal-500 ${
                errors.age
                  ? "placeholder:text-red-500 border-red-500 focus:outline-red-500"
                  : "border-gray-200"
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter Your ageage"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`border w-[300px] rounded-sm px-5 py-3 outline-teal-500 ${
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
              className={`border w-[300px] rounded-sm px-5 py-3 outline-teal-500 ${
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
        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex justify-between items-center w-max"
            >
              <Field label="Social Name">
                <input
                  {...register(`socials[${index}].name`)}
                  className="p-2 border box-border w-[145px] rounded-md"
                  type="text"
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                  placeholder="Enter Your Social Name"
                />
              </Field>
              <Field label="Social Link">
                <input
                  {...register(`socials[${index}].link`)}
                  className="p-2 border box-border w-[145px] rounded-md"
                  type="text"
                  name={`socials[${index}].link`}
                  id={`socials[${index}].link`}
                  placeholder="Enter Your Social link"
                />
              </Field>
              <button
                className="mt-8 mr-2 text-2xl"
                onClick={() => remove(index)}
              >
                &#8722;
              </button>
            </div>
          ))}
          <a
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </a>
        </FieldSet>

        <Field>
          <button className="text-md bg-teal-400 text-white px-5 py-2 rounded-sm w-36 m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
