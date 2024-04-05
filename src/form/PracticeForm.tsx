import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

const PracticeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        Email:
        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="text"
          placeholder="Enter Email"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        Password:
        <input
          {...register("password", {
            required: "Password is required",
            minLength: 8,
          })}
          type="password"
          placeholder="Enter password"
        />
        {errors && <span className="text-red-500">{errors.password?.message}</span>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PracticeForm;
