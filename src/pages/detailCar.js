import { Box} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import CarComponenet from "../components/car";
import CostRent from "../components/costBox";
import DetailsRent from "../components/details";
import BackButton from "../components/buttonBack";

export default function DetailCar(){
    const location = useLocation();
    const car = location.state.car;
    return(
        <Box>
            <BackButton />
             <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    margin:"10px",
                    width:{lg:"65%",xs:"100%"}
                }}>
                    <CarComponenet car={car} />
                </Box>
                <Box 
                    sx={{
                        width:{lg:"35%",xs:"100%"},
                        marginTop:{md:"60px"},
                        marginLeft:{xs:"10px"},
                        display:"flex",
                        flexDirection:{md:"column",xs:"column-reverse"},
                        gap:2
                    }}
                >   
                <CostRent car={car} />
                <DetailsRent />
                </Box>
            </Box>
        </Box>
    )
}