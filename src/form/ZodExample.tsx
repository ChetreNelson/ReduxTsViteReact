import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {z} from "zod"

// type FormFields = {
//   email:string,
//   password:string,
//   confirmPasword:string,
// }

const SignUpSchema =z.object({
  email :z.string().email(),
  password:z.string().min(3).max(5),
  confirmPassword:z.string().min(3)

}).refine(data =>data.password===data.confirmPassword,{
   message: "Passwords do not match",
   path:["confirmPassword"]
})
 
type FormFields=z.infer<typeof SignUpSchema> 

const ZodExample = () => {
  const {handleSubmit,register,formState:{
    errors,isSubmitting
 }} =useForm<FormFields>({resolver: zodResolver(SignUpSchema)})
 
 const onSubmit = async( data:FormFields)=>{
  await new Promise((resolve)=>setTimeout(resolve,1000))
  console.log(data)

 }
  return (
    <div >
      <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register('email')} type="string" placeholder="Enter email" />
          </div>
        {errors.email && <span>{errors.email.message}</span> }
          <div>
            <input {...register('password')} type="password" placeholder="Password" />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <div>
            <input {...register('confirmPassword')} type="password" 
            placeholder="Confirm password" />
          </div>
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          <div>
            <button disabled={isSubmitting} type="submit">{isSubmitting?"Submitting":"Submit"}</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ZodExample;
