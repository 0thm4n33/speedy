import React, { useState } from "react";
import {Avatar, Tabs,  Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { makeStyles } from "@mui/styles";
const arrow = ({
    height:"100%",
    cursor:"pointer"
});
const useStyle = makeStyles({
    brands:{
        display:"flex",
        width:"100%",
        justifyItems:"center",
        alignItems:"center"
    },brand:{
        display:'flex',
        alignItems:"center",
        fontFamily:"Poppins",
        fontWeight:"bold",
        flexDirection:"column",
        width:"100%",
        padding:"8px"
    },
    stack:{
        display:"flex",
        alignItems:"center",
        padding:"5px",
        width:"100%"
    },
    right:{
        ...arrow,
    },
    left:{
        ...arrow,
    }
})

export default function BrandComponent({brands}){
    const classes = useStyle();
    const width= 90;
    const height = 90;
    const naviagte = useNavigate();
    const handleOnChange = (event)=>{
        const brand = event.target.alt;
        naviagte(`/rent/${brand}`);
    }
   
    return(
        <Box
            sx={{
            maxWidth: { xs: "480", sm:"100%" },
            justifyContent:"center",
            display:"flex"
            }}
        >
            <Tabs 
                variant="scrollable"
                value={0}
                onChange={handleOnChange}
                sx={{width:"50%"}} 
            >
            {brands.map((brand,index)=>(
                <div className={classes.brand}  onClick={handleOnChange} id={index} >
                    <Avatar 
                        src={require(`../assets/logos/${brand.logo}`)}
                        alt={`${brand.name}`}
                        sx={{width:width,height:height,cursor:"pointer"}}
                    />
                        <span>{brand.name}</span>
                        <span>{brand.nombreOfCars}</span>
                 </div>
                ))}
             </Tabs>
        </Box>
    )
}