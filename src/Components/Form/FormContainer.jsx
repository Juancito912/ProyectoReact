import React,{ useState } from "react"
import { Box ,TextField,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton,FormHelperText, Typography, Button} from "@mui/material"
import FormInput from "./FormInput";
export default function FormContainer (){
    const [values, setValues] = useState({
      name: "",
      lastName:"",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [showPassword,setShowPassword] = useState(false);
      const handleSubmit= (e)=>{
      
        e.preventDefault();
        
      }
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const saveInfo=()=>{
        console.log(values)
      }
      const inputs = [
        {
          id: 0,
          name: "name",
          type: "text",
          placeholder: "Nombre",
          errorMessage:
            "El nombre de usuario debe tener entre 3 y 16 caracteres y no debe incluir ningún carácter especial",
          label: "Nombre",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 1,
          name: "lastName",
          type: "text",
          placeholder: "Apellido",
          errorMessage:
            "El Apellido de usuario debe tener entre 3 y 16 caracteres y no debe incluir ningún carácter especial",
          label: "Apellido",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "Debe ser un email valido!",
          label: "Email",
          required: true,
        },
        
        {
          id: 3,
          name: "password",
          type:'password',
          placeholder: "Contraseña",
          errorMessage:
            "¡La contraseña debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!",
          label: "Contraseña",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
          
        },
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirmar Contraseña",
          errorMessage: "Passwords don't match!",
          label: "Confirmar Contraseña",
          pattern: values.password,
          required: true,
        },
      ];
    return(
        <>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1 },
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            borderRadius: '10px',
            p:5,
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
        >
          <Typography variant="h6" textAlign='center' component={'h2'} sx={{color:'rgb(77, 1, 77)',fontSize:'2rem'}} color="initial"> Ingrese sus datos </Typography>
          {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
          <Button variant="contained" onClick={()=>{saveInfo()}} color="success"> Guardar</Button>
        </Box>
        </>
    )
}