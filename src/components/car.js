import { Box, Typography } from "@mui/material";
import React from "react";
import CarDescritpion from "./carDescription";
import SwipeComponenet from "./swipe";
import TableComponenet from "./table";
import {CarRental} from "@mui/icons-material";
import CarRequirement from "./carRequirement";
const functionnality = {
        titles:[
            {title:"Car Features",icon:<CarRental fontSize="small"/>}
        ],
        rows:[
            ["Engine Size"],
            ["Bluetooth"],
            ["AUX"],
            ["Parking Sensors"]
        ]
}
export default function CarComponenet({car}){
  return(
        <Box>
            <Typography 
                variant="h4"
                fontFamily={"Poppins"}
                marginBottom={"10px"}
                >
                    {car.marque.toUpperCase()} {car.serie} {car.year}
            </Typography>
            <SwipeComponenet maxStep={car.images.length}>
                {car.images.map(img =>(
                    <Box
                        component={"img"}
                            width={"100%"}
                            src={require(`../assets/images/${img}`)}
                    />
                    ))}
            </SwipeComponenet>
            <CarDescritpion 
                description={"The undeniably attractive new Hyundai Tucson is an excellent compact SUV that gives a beat to its competitor. This stylish beast impresses all the motorheads with its spacious five-seater interior, beautiful cabin, and large cargo area. This frontrunner in the market comes with new features that focus on strength, style and safety. The 2022 Tucson is6 inches longer, the exterior is much edgier, the cabin is upscale, and the infotainment system is sleek and fine. The suite of driver assistance features has been modified as well. This avant-garde SUV is very affordable."}
                />
            <TableComponenet width={"100%"} data={functionnality} />
            <CarRequirement />
        </Box>
    )
}