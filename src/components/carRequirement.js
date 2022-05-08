import React from "react";
import TableComponenet from "./table";
import {Person,Public} from "@mui/icons-material";
import { Box } from "@mui/material";

const requirements = [
    {
        titles:[
            {title:"Morrocan Residents",icon:<Person />}
        ],
        rows:[
            ["Copy of passeport"],
            ["Morrocan Driving License"],
            ["Copy of Morrocan ID"]
        ]
    },
    {
        titles:[
            {title:"Tourists",icon:<Public />}
        ],
        rows:[
            ["Copy of Passeports"],
            ["Copy of Visit Visa"],
            ["Driving License"]
        ]
    }
]
export default function CarRequirement({data}){
    return(
        <Box 
        display={"flex"} 
        gap={"10px"} 
        flexDirection={{xs:"column",md:"row"}}
        >
            {requirements.map(req =>(
                <TableComponenet data={req} />
            ))}
        </Box>
    )
}