//import React, { useState } from "react";
import { LoginField, LoginSchema } from "../lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { addInfo } from "../redux/slice/Login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

 // const [input, setInput] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginField>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: LoginField) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const atIndex=data.email.indexOf("@");
    const loginInfo=data.email.slice(0,atIndex)
   // console.log(data);
    dispatch(addInfo(loginInfo));
    navigate("/home");
  };
  return (
    <div className="flex flex-row w-2/3 h-2/3 mt-4 items-center overflow-hidden shadow-lg rounded-lg  shadow-green-400">
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
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
