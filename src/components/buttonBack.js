import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton(){
    const navigate = useNavigate();
    return(
        <Button  onClick={()=>navigate(-1)}
            sx={{fontFamily:"Poppins",fontWeight:"bold",color:"red"}}
        >
            <ArrowBack color="red" fontSize="small" sx={{padding:"5px"}}/>
            BACK
        </Button>
    )
}