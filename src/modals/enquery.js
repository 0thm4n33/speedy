import { Button,Box, Dialog, DialogContent, Card, Typography, CardMedia, DialogActions, Snackbar, Alert} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React,{useState} from "react";
import {Email,Phone,TextSnippet   } from "@mui/icons-material"
//import service from "../services/index.js";
import LabelTextField from "../components/labelTextField";
import { ReservationContext } from "../App";
const useStyle = makeStyles({
    wrapper:{
        width:"100%",
    },
    card:{
        width:"100%",
    },
    bodyModal:{
        padding:"10px",
        width:"95%",
        height:"95%",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
    },
    modal:{
        margin:"auto",
        border:"1px solid black",
        width:"100%",
    },
    content:{
        margin:"auto",
        width:"85%",
    },
    textField:{
        margin:"2px",
        padding:"10px",
        width:"95%"
    },
    header:{
        color:"black"
    },
    closeButton:{
        display:"flex",
        justifyContent:"end",
    },
    button:{
        backgroundColor:"red",
        color:"white",
        width:"100%",
        fontWeight:"bold",
        padding:"10px",
        fontFamily:"Poppins",
        "&:hover":{
            color:"black"
        }
    }
})
export default function EnqueryModal(props){
    const service = React.useContext(ReservationContext);
    console.log(service);
    const style = useStyle();
    const [open,setOpen] = useState(false);
    const [openSnack,setOpenScnak] = useState(false);
    
    const [reservation,setReservation] = useState(
        {
            From:"",
            To:"",
            FullName:"",
            Phone:"",
            Email:"",
            car:props.car
        }
    )

    const handleOnOpen = ()=>{
        setOpen(true);
    }

    const handleOnClose = () =>{
        setOpen(false);
    }

    const handleOnSnackClose = (event,reason)=>{
        if(reason === "clickaway") return;
        setOpenScnak(false)
    }

    function handleOnChange(event){
        console.log(event.target.name);
        setReservation({...reservation,[event.target.name]:event.target.value})
    }

    const handleOnSubmit = () => {
        service.addReservation(reservation);
        setReservation({From:"",To:"",FullName:"",Phone:"",Email:""});
        setOpenScnak(true);
        setOpen(false);
    }



    return(
        <div className={style.wrapper}>
            <Button className={props.style === undefined ? style.button : props.style } onClick={handleOnOpen}>
                SEND ENQUERY
            </Button>
            <Dialog open={open} onClose={handleOnClose} className={style.modal} scroll="body">
                <CardMedia
                    component={"img"}
                    height="220"
                    width="500"
                    image={require('../assets/images/twin-night.jpg')}
                />
                <Typography textAlign={"center"} fontFamily={"Poppins"} fontWeight={"bold"} variant="h5" padding={"10px"}>
                    {props.car.marque.toUpperCase()} {props.car.serie} {props.car.year}
                </Typography>
                <DialogContent className={style.content}>
                    <Card className={style.card}>
                        <Box 
                            component={"form"}
                            className={style.bodyModal}
                        >
                            <LabelTextField type={"datetime-local"} label={"From"} style={style.textField} value={reservation.From} onChange={handleOnChange} />
                            <LabelTextField type={"datetime-local"} label={"To"} style={style.textField} value={reservation.To} onChange={handleOnChange}/>
                            <LabelTextField label={"FullName"} type={"text"} icon={<TextSnippet />} value={reservation.FullName} style={style.textField} onChange={handleOnChange}/>
                            <LabelTextField label={"Phone"} type={"tel"} icon={<Phone />}  value={reservation.Phone} style={style.textField} onChange={handleOnChange}/>
                            <LabelTextField label={"Email"} type={"email"} value={reservation.Email} icon={<Email />} style={style.textField} onChange={handleOnChange}/>
                        </Box>
                    </Card>
                </DialogContent>
                <DialogActions sx={{display:"flex",justifyContent:"center"}}>
                    <Button className={style.button} onClick={handleOnSubmit}>
                            SEND ENQUERY
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnack} anchorOrigin={{vertical:"bottom",horizontal:"right"}} autoHideDuration={3000} onClose={handleOnSnackClose}>
                <Alert severity="success">Booking saved</Alert>
            </Snackbar>
        </div>
       
    )
}   