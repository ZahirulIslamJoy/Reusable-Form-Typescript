import { createContext } from "react";
export const FormContext = createContext<{double:boolean} | null >(null);

export const Form = ({ children, onSubmit, double }) => {

  // const view=(e)=>{
  //   e.preventDefault();
  //   console.log("okk");
  // }

  return (
    <FormContext.Provider value={{double}}>
      <form onSubmit={onSubmit} className={`w-full  border border-gray-300  shadow-sm ${
          double ? "max-w-5xl" : "max-w-md"
        } p-6 mx-auto`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};
