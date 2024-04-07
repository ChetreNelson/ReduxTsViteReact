import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type FormFields = {
  email: string;
  password: string;
};
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
        email: "chetreenelson8@gmail.com",
      },
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "email already taken",
      });
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            Email:
            <input
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email must include @";
                  }
                  return true;
                },
              })}
              type="text"
              placeholder="Enter Email"
            />
          </div>
          {errors.email && (
            <div className="text-red-600">{errors.email.message}</div>
          )}
          <div>
            Password:
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 5,
                  message: "Password most be of min 5 length",
                },
              })}
              type="password"
              placeholder="Enter Password"
            />
            {errors.password && (
              <div className="text-red-600">{errors.password.message}</div>
            )}
          </div>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
          {errors.root && (
            <div className="text-red-600">{errors.root.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReactHookForm;
