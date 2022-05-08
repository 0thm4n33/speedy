import { Box, Card, CardContent, Typography } from "@mui/material";
import {Sell} from "@mui/icons-material"
import React from "react";
import EnqueryModal from "../modals/enquery";
import PriceComponent from "./prices";

export default function CostRent({car}){
    return(
        <Card>
            <Box sx={{display:"flex",backgroundColor:"#E8E8E8"}}>
                <Sell fontSize="medium" />
                <Typography sx={{
                    fontWeight:"bold",
                    fontFamily:"Poppins",
                    margin:"5px"
                    }}>
                    Rental cost
                </Typography>
            </Box>
            <CardContent sx={{padding:"10px"}}>
                <Box display={"flex"} margin={"10px"}>
                    <PriceComponent carPrice={car.prix} />
                </Box>
                <Box xs={{margin:"10px"}}>
                    <EnqueryModal car={car}/>
                </Box>
            </CardContent>
    </Card> 
    )
}