import { createContext } from "react";

export const Form = ({ children, onSubmit,double}) => {

    export const FormContext=createContext(null)

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full  border border-gray-300  shadow-sm ${
        double ? "max-w-5xl" : "max-w-md"
      } p-6 mx-auto`}
    >
       {children} 
    </form>
  );
};
