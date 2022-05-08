import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function CarDescritpion({description}){
    const max = 254;
    const [showMore,setShowMore] = useState(false);
    const data = description;
    const handleOnClick = () => {
        setShowMore(!showMore);
    }
    return(
        <Box>
            <Box component={"div"} fontFamily={"Poppins"} sx={{height:"40%",overflow:"auto"}}>
                {showMore === true ? data : data.substring(0,max)}
            </Box>
            <Button onClick={handleOnClick} sx={{width:"100%",fontFamily:"Poppins",color:"Red"}}>
                {showMore === true ? "hide" : "show more"}
            </Button>
        </Box>
    )
}