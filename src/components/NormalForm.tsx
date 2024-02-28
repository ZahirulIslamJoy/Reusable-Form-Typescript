import {FieldValues, useForm} from "react-hook-form"
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
const NormalForm = () => {
  const double = true;
  const signUpSchema=z.object({
    name:z.string().min(1,"Name is required"),
    email:z.string().email().min(1,"Email is required"),
    phone:z.string().min(1,"Phone is required"),
    password:z.string().min(8,"Password is too short")
  })

  type TForm=z.infer<typeof signUpSchema>

  const {register, handleSubmit, formState: { errors },}=useForm<TForm>({
    resolver:zodResolver(signUpSchema)
  });
  const onSubmit=(data:FieldValues)=>{
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={`w-full  border border-gray-300  shadow-sm ${
        double ? "max-w-5xl" : "max-w-md"
      } p-6 mx-auto`}
    >
      <div
        className={` grid grid-cols-1 justify-items-center  gap-5 ${
          double ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className="w-full max-w-md">
          <label htmlFor="">Name</label>
          <input type="text" id="name"  {...register("name")} />
          {errors.name && (<p className="text-xs text-red-600">{errors.name.message}</p>)}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Email</label>
          <input type="text" id="email"  {...register("email")} />
          {errors.email && (<p className="text-xs text-red-600">{errors.email.message}</p>)}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Phone No</label>
          <input type="text" id="phone"  {...register("phone")}  />
          {errors.phone && (<p className="text-xs text-red-600">{errors.phone.message}</p>)}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register("password")}  />
          {errors.password && (<p className="text-xs text-red-600">{errors.password.message}</p>)}
        </div>
      </div>
      <div
        className={` grid grid-cols-1 mt-6 justify-items-center  gap-5 ${
          double ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className={`w-full max-w-md col-start-1 ${double?"md:col-start-2 flex  md:justify-end":''}`}>
          <button className="px-3 py-1 bg-violet-600 hover:bg-violet-700  rounded-lg text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
