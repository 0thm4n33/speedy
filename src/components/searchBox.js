import React, { useState } from "react";
import { Box, Button, FormControl, Typography,TextField,Stack } from "@mui/material";
import {LocationSearchingOutlined} from "@mui/icons-material";
import SelectedBrand from "./selectedBrand";
const brands = [
    {name:"BMW",icon:"bmw-logo.webp"},
    {name:"AUDI",icon:"audi-logo.jpg"},
    {name:"VOLKSWAGEN",icon:"golf-logo.png"},
    {name:"MERCEDES-BENZ",icon:"mercedes-benz.webp"},
]
export default function SearchBox(){
    const image = require("../assets/logos/icon-car-suv.png");
    const [brand,setBrand] = useState("");
    
    const handleOnChange = (event) =>{
        const value = event.target.value;
        setBrand(value);
    }
    
    return(
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
           <Box sx={{display:"flex",backgroundColor:"#E8E8E8",padding:"10px"}}>
               <LocationSearchingOutlined fontSize="small" />
               <Typography paddingLeft={"10px"} fontFamily={"Poppins"}>Car Brands</Typography>
           </Box>
           <Box sx={{display:"flex",flexDirection:"column",gap:"15px"}}>
               <Typography>Vehicle Type:</Typography>
               <Box sx={{display:"flex"}}>
                {["Economy","Luxury","SUV"].map((type)=>(
                    <Button sx={{fontFamily:"Poppins",color:"red",fontWeight:"bold"}}>
                        <Box sx={{justifyContent:"center",margin:"2px",padding:"9px",border:"1px solid grey"}}>
                            <Box component={"img"} src={image} sx={{paddingLeft:"9px"}} />
                            {type}
                        </Box>
                    </Button>
                    ))}
               </Box>
              <SelectedBrand brands={brands} brand={brand} handleOnChange={handleOnChange} />
              <Box component={"form"} sx={{backgroundColor:"#E8E8E8",margin:"5px",padding:"10px"}}>
                    {["Start At","Finish"].map(value =>(
                        <FormControl sx={{display:"grid",gridTemplateColumns:"1fr 5fr"}}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                {value}
                            </Box>
                            <TextField type={"datetime-local"} sx={{margin:"5px",width:"80%"}}/>
                        </FormControl>
                    ))}
                    <Stack alignItems={"end"}>
                        <Button sx={{width:"40%",margin:"10px",backgroundColor:"red",color:"white",fontFamily:"Poppins",fontWeight:"bold"}}>
                            SEARCH
                        </Button>
                    </Stack>
              </Box>
           </Box>
        </Box>
    )
}