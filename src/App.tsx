import { FieldValues, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input } from "./components/ReuasbleForm";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
const App = () => {

  const signUpSchema=z.object({
    email:z.string().email().min(1,"Email is required"),
  })

  type TForm=z.infer<typeof signUpSchema>

  const {register, handleSubmit, formState: { errors },}=useForm<TForm>({
    resolver:zodResolver(signUpSchema)
  });

  const onSubmit=(data:FieldValues)=>{
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} double={true}>
      <FormSection>
      <Input type="email" label="email" errors={errors} register={register("email")} ></Input>
      </FormSection>
      <FormSubmit></FormSubmit>
    </Form>
  );
};

export default App;
