import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import {SignUpSchema , FormFields } from "../lib/type";

// type FormFields = {
//   email:string,
//   password:string,
//   confirmPasword:string,
// }

const ZodExample = () => {
  const navigate =useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async (data: FormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    navigate('/home')
    

  };
  return (
    <div className="flex flex-row w-2/3 h-2/3 mt-10 items-center overflow-hidden shadow-lg rounded-lg  shadow-green-400">
      <div className="flex flex-col h-full w-2/3  bg-slate-500   justify-center items-center ">
        <img
          src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-white h-full w-full flex flex-col items-center justify-center">
        <div className="text-center mt-5 text-xl font-bold">
          <h1>Create Your Account</h1>
        </div>
        <div className="mt-5 w-2/3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col  ">
              <label className="mb-1">Email</label>
              <input
                className="bg-slate-400 rounded outline-none text-white  p-2"
                {...register("email")}
                type="string"
                placeholder="Enter email"
              />
            </div>
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            <div className="flex flex-col">
              <label className=" mt-1 mb-1">Password</label>
              <input
                className="bg-slate-400 rounded outline-none text-white p-2"
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            <div className="flex flex-col">
              <label className="mt-1 mb-2">Confirm Passoword</label>
              <input
                className="bg-slate-400 rounded outline-none text-white p-2"
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
            <div className="text-center mt-4 mb-6 ">
              <button
                className=" bg-slate-500 rounded-lg
              transition duration-300 ease-in-out hover:bg-slate-600 active:bg-yellow-200
              p-2  text-white "
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <p className="text-blue-600">Already have an account?</p>
            <div className="ml-1">
            <Link to={"/login"}>
              <button
                className=" bg-blue-600 rounded-lg
              transition duration-300 ease-in-out hover:bg-blue-800 active:bg-yellow-200
              p-2  text-white "
              >
                login
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodExample;
