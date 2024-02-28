import { Form, FormSection, FormSubmit } from "./components/ReuasbleForm";
import {FieldValues, useForm} from "react-hook-form"
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const App = () => {

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
    <Form double={true} onSubmit={handleSubmit(onSubmit)}>
      <FormSection></FormSection>
      <FormSubmit></FormSubmit>
    </Form>
  );
};

export default App;
