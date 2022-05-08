import { Box, Typography } from "@mui/material";
import React from "react";
const prices = [
    {"period":"Monthly","coeff":30},
    {"period":"Weekly","coeff":7},
    {"period":"Daily","coeff":1}
]
export default function PriceComponent({carPrice}){
    return(
        prices.map((price)=>(
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} width={"100%"}>
                <Typography 
                    fontWeight={"bold"}
                    fontFamily={"Poppins"}
                    color={"red"}
                >
                    {carPrice * price.coeff}€
                </Typography>
                <Typography 
                    fontFamily={"Poppins"} 
                    fontWeight={"bold"}
                    color={"gray"}
                    >
                    {price.period}
                </Typography>
            </Box>
        ))
    )
}