import { Button,Box, TextField, Dialog, DialogContent, FormLabel} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React,{useState} from "react";
import {Close} from "@mui/icons-material"
const useStyle = makeStyles({
    wrapper:{
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
    },
    textField:{
        padding:"5px",
        width:"90%"
    },
    closeButton:{
        display:"flex",
        justifyContent:"end",
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
            <Dialog open={open} onClose={handleOnClose} className={style.modal}>
                
                <div className={style.closeButton}>
                    <Button 
                        startIcon={<Close fontSize="medium" color="red"/>} 
                        onClick={handleOnClose}
                    />
                </div>    
                <DialogContent>
                    <Box 
                        component={"form"}
                        className={style.bodyModal}
                    >        
                        <FormLabel>From
                            <TextField className={style.textField} type={"date"}/>
                        </FormLabel>
                        <FormLabel>To
                                <TextField type={"date"} className={style.textField} />
                        </FormLabel>
                    </Box>
                </DialogContent>
            </Dialog>  
        </div>
       
    )
}   