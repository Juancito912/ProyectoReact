import React,{ useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { Box ,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton,FormHelperText, Typography, Button} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {addDoc,collection,doc,getDoc,getFirestore,serverTimestamp,writeBatch} from "firebase/firestore";
import { Context } from "../../Context/CartContext";
import IsLouding from "../Errors/IsLouding";
import Error404 from "../Errors/Error404";
import Formfinish from "./FormFinish";
import { validatePassword,validateName,validateMail } from "./FormValidate";

export default function FormContainer (){
  const {getTotal,packCart,clear} = useContext(Context);
  const { register, handleSubmit, watch,formState: { errors } } = useForm();

    const [showPassword,setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
    
    const [isLouding,setIsLouding] = useState(false);
    const [orderId,setOrderId] = useState('');
    const [isFailing,setIsFailing] = useState(false);
    
    const createOrder = (data)=>{
      setIsLouding(true);
      
      const db= getFirestore();
      // Primero verificamos que haya stock o que el producto exista en la base de datos
      const batch = writeBatch(db);
      for (let item of packCart()) {
        const artRef = doc(db,'Productos',item.id);
        batch.update(artRef,{stock:item.stockNuevo});
      }
      batch.commit()
        .then(res=>{
          // Creamos la orden
          const order = {
            buyer:{name:data.username+" "+ data.lastName, email:data.email, password:data.password},
            items :[...packCart()],
            total: getTotal(),
            date:serverTimestamp(),
          }
          
          const ordersCollection = collection(db,'Orders');
          // agarramos el id de compra
          addDoc(ordersCollection,order)
            .then(({id}) => {
              const orderRef = doc(db,'Productos',id);
              getDoc(orderRef)
                .then((res)=>{
                  setOrderId(res.id);
                  clear();
                })
                .catch((err)=>{
                  console.log(err);
                  setIsFailing(true);
                })
                .finally(()=> {
                  setIsLouding(false);
                })
            })
        })
        .catch((err)=>{
          console.log(err);
          setIsFailing(true);
          setIsLouding(false);
        })
    }

    const onSubmit =(data) => {
      createOrder(data);
    }
    const validateConfirmPassword= (string)=>{
      if(string === watch('password')){
        return true;
      }
      return false;
    }
    
  return(
      <>
      {(isLouding) && <IsLouding/>}
      {(isFailing) && <Error404/>}
      {(orderId) && <Formfinish id={orderId}/>}
      
      {!(isLouding) && !(isFailing) && !(orderId) &&
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <Box sx={{
            '& .MuiTextField-root': { m: 1 },
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            borderRadius: '10px',
            p:4,
            }}>
              <Typography variant="h6" textAlign='center' component={'h2'} sx={{color:'rgb(77, 1, 77)',fontSize:'2rem'}} color="initial"> Ingrese sus datos </Typography>

              {/* Nombre */}
              <FormControl color="secondary" sx={{width:{xs:'80%',sm:'60%',md:'40%',lg:'30%'},m:2}} 
                error={errors.username?true:false}  variant="outlined" >
              <InputLabel >Nombre</InputLabel>
              <OutlinedInput {...register('username',{
                  required:true,
                  minLength:3,
                  maxLength:16,
                  validate:validateName
              })}
              label={'Nombre'}
              />
              {errors.username?.type === 'required' && <FormHelperText>Este campo no puede estar vacio</FormHelperText>}
              {errors.username?.type === 'minLength' && <FormHelperText>El Minimo de caracteres es de 3</FormHelperText>}
              {errors.username?.type === 'maxLength' && <FormHelperText>El Maximo de caracteres es de 16</FormHelperText>}
              {errors.username?.type === 'validate' && <FormHelperText>Ingrese un nonbre valido</FormHelperText>}
              </FormControl> 

                {/* Apellido */}
              <FormControl color="secondary"  sx={{width:{xs:'80%',sm:'60%',md:'40%',lg:'30%'},m:2}} 
                error={errors.lastName?true:false}  variant="outlined" >
              <InputLabel >Apellido</InputLabel>
              <OutlinedInput {...register('lastName',{
                  required:true,
                  minLength:3,
                  maxLength:16,
                  validate:validateName
              })}
              label={'Apellido'}
              />
              {errors.lastName?.type === 'required' && <FormHelperText>Este campo no puede estar vacio</FormHelperText>}
              {errors.lastName?.type === 'minLength' && <FormHelperText>El Minimo de caracteres es de 3</FormHelperText>}
              {errors.lastName?.type === 'maxLength' && <FormHelperText>El Maximo de caracteres es de 16</FormHelperText>}
              {errors.lastName?.type === 'validate' && <FormHelperText>Ingrese un apellido valido</FormHelperText>}
              </FormControl> 

                {/* Mail */}
              <FormControl color="secondary"  sx={{width:{xs:'80%',sm:'60%',md:'40%',lg:'30%'},m:2}} 
                error={errors.email?true:false}  variant="outlined" >
              <InputLabel >Email</InputLabel>
              <OutlinedInput {...register('email',{
                  required:true,
                  validate:validateMail
              })}
              label={'Email'}
              />
              {errors.email?.type === 'required' && <FormHelperText>Este campo no puede estar vacio</FormHelperText>}
              {errors.email?.type === 'validate' && <FormHelperText>Ingrese un mail valido</FormHelperText>}
              </FormControl> 

              {/* Contrase??a */}
              <FormControl color="secondary"  sx={{width:{xs:'80%',sm:'60%',md:'40%',lg:'30%'},m:2}} 
                error={errors.password?true:false}  variant="outlined" >
              <InputLabel >Contrase??a</InputLabel>
              <OutlinedInput type={showPassword?'text':'password'} {...register('password',{
                  required:true,
                  minLength:8,
                  validate:validatePassword
              })}
              label={'Contrase??a'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
              {errors.password?.type === 'required' && <FormHelperText>Este campo no puede estar vacio</FormHelperText>}
              {errors.password?.type === 'minLength' && <FormHelperText>La contrase??a debe tener al menos 8 letras </FormHelperText>}
              {errors.password?.type === 'validate' && <FormHelperText>
                La contrase??a debe incluir al menos 1 letra mayuscula, 1 n??mero y 1 car??cter especial
              </FormHelperText>}

              </FormControl> 

                {/* Confirmar Contrase??a */}
              <FormControl color="secondary"  sx={{width:{xs:'80%',sm:'60%',md:'40%',lg:'30%'},m:2}} 
                error={errors.confirmPassword?true:false}  variant="outlined" >
              <InputLabel >Confirmar Contrase??a</InputLabel>
              <OutlinedInput type={showPassword?'text':'password'} {...register('confirmPassword',{
                  required:true,
                  validate:validateConfirmPassword
              })}
              label={'Confirmar Contrase??a'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              />
              {errors.confirmPassword?.type === 'required' && <FormHelperText>Este campo no puede estar vacio</FormHelperText>}
              {errors.confirmPassword?.type === 'validate' && <FormHelperText>Las contrase??as no son iguales</FormHelperText>}
              </FormControl>
              
              <Button sx={{m:1}} color="success" size="large" variant="contained"  type="submit" >Enviar</Button>
          </Box>
        </form>
        }
      </>
    )
}