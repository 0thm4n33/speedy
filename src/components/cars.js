import { Box, Button, Stack, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {Check} from "@mui/icons-material";
import React from "react";
import image from '../assets/images/bmw-520i.webp';
import EnqueryModal from "../modals/enquery";
const title = {
    fontFamily:"Poppins",
    fontWeight:"bold",
    padding:"1px"
}
const useStyle = makeStyles({
    wrapper:{
        display:"flex",
        alignContent:"center",
        width:"100%",
        borderRadius:"16px",
        boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        backdropFilter: "blur(5px)",
        border: "px solid rgba(255, 0, 0, 0.3);"
    },
    carInfo:{
        width:"90%",
        display:"flex",
        flexDirection:"column",
        padding:"20px",
        fontFamily:"Poppins",
        fontWeight:"bold",
        fontSize:"medium",
    },
    priceWrapper:{
        display:"flex",
        justifyContent:"space-between",
        padding:"5px",
        paddingBottom:"20px"
    },
    title:{
        ...title,
        fontSize:"larger",
    },
    subtitle:{
       ...title,
        color:"gray",
        fontSize:"small",
        paddingBottom:"15px"
    },
    priceInfo:{
        fontWeight:"bold",
        fontFamily:"Poppins",
        fontSize:"large",
        color:"red",
        padding:"3px"
    },
    featuresWrapper:{
        padding:"5px",
        fontFamily:"Poppins"
    },
    featureTitle:{
        padding:"5px",
        fontSize:"medium",
        fontFamily:"Poppins",
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"red",
        color:"white",
        fontFamily:"Poppins",
        fontWeight:"bold",
        width:"100%",
        "&:hover":{
            color:"black"
        }
    },
    boxImg:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"95%",
    }
})

const prices = [
    {"period":"Monthly","coeff":30},
    {"period":"Weekly","coeff":7},
    {"period":"Daily","coeff":1}
]

const features = [
    {"name":"Minimum Documents Required"},
    {"name":"Drop off Anywhere in Casablanca"},
    {"name":"Service & Maintenance Free"},
    {"name":"24/7 Roadside Assistance"},
]

export default function CarsComponent({ car }){
    const style = useStyle();
    return(
        <Box className={style.wrapper} sx={{flexDirection:{xs:"column",lg:"row"}}}>
             <Box className={style.boxImg}>
                <Box
                    component={"img"}
                    sx={{height:260,width:320}}
                    src={image}
                    />
                <Box
                 component={"div"}
                 sx={{
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"center",
                     width:200,
                     height:60,
                     border:"none",
                     backgroundColor:"#EFECE2",
                     color:"black",
                 }}
                >
                    <Typography component={"span"} padding="5px" textAlign={"center"} fontFamily={"Poppins"}>
                        Fully Automatic with Bluetooth
                    </Typography>
                </Box>
            </Box>
            <Box className={style.carInfo}>
                    <Typography component={"span"} className={style.title}>
                        {car.marque.toUpperCase()} {car.serie} {car.year}
                    </Typography>
                    <Typography component={"div"} className={style.subtitle}>
                        {car.type}
                    </Typography>
                    <Typography component={"div"} className={style.priceWrapper}>
                       {prices.map((price)=>(
                           <div>
                            <Typography component={"span"} className={style.priceInfo}>
                                {car.prix * price.coeff}DH
                            </Typography>
                            / {price.period}
                           </div>
                       ))}
                    </Typography>
                    <Typography component={"div"} className={style.featuresWrapper}>
                        {features.map((f)=>(
                            <Typography component={"div"} className={style.featureTitle}>
                                <Check fontSize="small"/> {f.name}
                            </Typography>
                        ))}
                    </Typography>
                    <Stack spacing={3} direction={{xs:"column",md:"row"}} padding={"10px"}>
                        <Button className={style.button}>VIEW DETAILS</Button>
                        <EnqueryModal style={style.button} />
                    </Stack>
                </Box> 
        </Box>
    )
}