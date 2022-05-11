import React, { useContext } from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IconButton } from "@mui/material";
import { Context } from "../../Context/CartContext";


export default function ButtonCountRefresh(props){
    let {setQuantityItem}= useContext(Context);
    const handleSetAll = ()=>{
        setQuantityItem(props.productCart.id,props.qty);
        props.setter(props.qty);
    }

    return (
        <>
        <IconButton aria-label="refresh" color='error' size='medium' onClick={()=>{handleSetAll()}}
            >
            <RestartAltIcon/>
        </IconButton>
            
        </>
    )
}