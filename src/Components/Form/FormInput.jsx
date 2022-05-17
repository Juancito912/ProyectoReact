import React,{ useState } from "react"
import { Box ,TextField,FormControl,InputAdornment,Input,InputLabel,OutlinedInput,IconButton,FormHelperText, Typography, Button} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AccountCircle } from "@mui/icons-material";

export default function FormInput(props){
    
    const { label, errorMessage, onChange, id,...inputProps } = props;
    return (
        <>
            <FormControl variant="standard">
            <TextField
            
            color="secondary"
            {...inputProps}
                onChange={onChange}
                label={label}
                
            />
            
            </FormControl>
        </>
    )

}