import { useState } from "react";
import {login} from "./store";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
type Inputs = {
  email: string
  password: string
}
export default function Login() {
  const dispatch = useDispatch();
  const [Error] = useState<string>('hidden');
  const [SpinValue, setSpinValue] = useState<string>('hidden');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: 'admin@crm.com',
      password: '12345678'
    }
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = data =>{
    setSpinValue('inline');
    setTimeout(function(){
      if(data.email == 'admin@crm.com' && data.password =='12345678'){
        dispatch(login({emailValue:data.email}))
        localStorage.setItem("username", "Administartor");
        navigate("/dashboard");
      }
    }, 1000);
  } 
  return (
    <Card className="mx-auto mt-40 w-max body-font font-poppins animate-fade-down">
      <CardHeader
        variant="gradient"
        color="deep-purple"
        className="grid h-24 p-0 mb-4 place-items-center w-96"
      >
        <Typography variant="h3" color="white" className="font-body">
          CRM Demo
        </Typography>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" variant="standard" {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}  
        style={{borderColor: errors.email && "red" }} />
        {errors.email && errors.email.type === "required" && ( <Typography color="red">Email is required.</Typography> )}
        {errors.email && errors.email.type === "pattern" && ( <Typography color="red">Email is not valid.</Typography> )}
        <Input label="Password" type="password" variant="standard"  {...register("password", { required: true, minLength: 6 })} 
        style={{borderColor: errors.password && "red" }} />
        {errors.password && errors.password.type === "required" && ( <Typography color="red"> Password is required. </Typography> )}
        {errors.password && errors.password.type === "minLength" && ( <Typography color="red"> Password should be at-least 6 characters. </Typography> )}
        <div className={`flex flex-col gap-2 ${ Error }`}>
          <Alert color="red" variant="gradient" className="p-4 py-2">
            <span className="text-xs">A simple gradient alert for showing message.</span>
          </Alert>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button type="submit" variant="gradient" color="deep-purple" className="p-4 font-body" fullWidth>
        <span className="m-3">Sign In</span>  <FontAwesomeIcon icon={faSpinner} spin className={SpinValue}/> 
        </Button>
      </CardFooter>
      </form>
    </Card>
  );
}