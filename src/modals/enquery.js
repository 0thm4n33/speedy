import { Button,Box, Dialog, DialogContent, Card, Typography, CardMedia, DialogActions} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React,{useState} from "react";
import {Close,Email,Phone,TextSnippet   } from "@mui/icons-material"
import LabelTextField from "../components/labelTextField";
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
        fontWeight:"bold",
        padding:"10px",
        fontFamily:"Poppins",
        "&:hover":{
            color:"black"
        }
    }
})
export default function EnqueryModal(props){
    const style = useStyle();
    const [open,setOpen] = useState(false);

    const handleOnOpen = ()=>{
        setOpen(true);
    }

    const handleOnClose = () =>{
        setOpen(false);
    }

    return(
        <div className={style.wrapper}>
            <Button className={props.style} onClick={handleOnOpen}>
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
                            <LabelTextField type={"datetime-local"} label={"From"} style={style.textField} />
                            <LabelTextField type={"datetime-local"} label={"to"} style={style.textField} />
                            <LabelTextField label={"Fullname"} type={"text"} icon={<TextSnippet />} style={style.textField} />
                            <LabelTextField label={"Phone"} type={"tel"} icon={<Phone />} style={style.textField}/>
                            <LabelTextField label={"Email"} type={"email"} icon={<Email />} style={style.textField}/>
                        </Box>
                    </Card>
                </DialogContent>
                <DialogActions sx={{display:"flex",justifyContent:"center"}}>
                    <Button className={props.style}>
                            SEND ENQUERY
                    </Button>
                </DialogActions>
            </Dialog>  
        </div>
       
    )
}   