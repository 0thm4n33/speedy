import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationContext } from "../App";
import BackButton from "../components/buttonBack";
import CarsComponent from "../components/cars";
import SearchBox from "../components/searchBox";
import styleModule from '../styles/rentPage.module.css';
const useStyle = makeStyles({
    box:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        gap:"10px",
    }
});
export default function RentPage(){
    const service = React.useContext(ReservationContext);
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
        <div>
            <BackButton />
            <div className={styleModule.rentRoot}>
                <Box sx={{width:{md:"31%",xs:"100%",margin:"5px"}}}>
                    <SearchBox />
                </Box>
                <Box className={style.box} sx={{width:{xs:"100%",md:"66%"}}}>
                    {cars !== undefined && cars.map((car)=>(
                            <CarsComponent car={car} />
                    ))}
                </Box>
            </div>
        </div>
        
    )
}