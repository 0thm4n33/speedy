import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import CarsComponent from "../components/cars";
import service from "../services";
import styleModule from '../styles/rentPage.module.css';
const useStyle = makeStyles({
    box:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        gap:"10px",
    }
})
export default function RentPage(){
    const style = useStyle();
    const { type } = useParams();
    const [cars,setCars] = useState([])
    const getType = () =>{
        const cars = service.getCarsByType(type);
        setCars(cars);
        console.log(cars);
    }

    useEffect(getType,[type]);
    
    return(
        <div className={styleModule.rentRoot}>
            <div className={styleModule.rowOne} >
                ONE
            </div>
            <Box className={style.box} sx={{width:{xs:"100%",md:"81%"}}}>
                {cars !== undefined && cars.map((car)=>(
                        <CarsComponent car={car} />
                ))}
            </Box>
        </div>
    )
}