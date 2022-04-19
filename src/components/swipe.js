import {KeyboardArrowRight,KeyboardArrowLeft} from "@mui/icons-material"
import { Button, MobileStepper,Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
const useStyle = makeStyles({
    box:{
        border:"1px solid black",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"15px",
        width:"100%"
    },
    styleButton:{
        fontFamily:"Poppins",
        fontWeight:"bold",
        color:"red",
    },
    dotActive:{
        backgroundColor:"red"
    },
})
export default function SwipeComponenet(props){
    const [activeStep,setStep] = useState(0)
    const classes = useStyle();
    
    const nextButton = () =>{
        return(
            <Button 
                className={classes.styleButton}
                disabled={activeStep === (props.maxStep-1)}
                onClick={handleNextStep}
            >
              <KeyboardArrowRight fontSize="large" color="red"/>
            </Button>
        )
    }
    
    const backButton = () =>{
        return(
            <Button 
                className={classes.styleButton}
                disabled={activeStep === 0}
                onClick={handeBackStep}
                >
                <KeyboardArrowLeft fontSize="large" color="red"/>
            </Button>
        )
    } 

    const handleNextStep = () =>{
        setStep(activeStep + 1)
    }

    const handeBackStep = () =>{
        setStep(activeStep - 1);
    }

    const handleStepChange = (step) =>{
        setStep(step);
    }

    return(
        <Stack direction={"column"} alignItems={"center"}>
            <SwipeableViews
                enableMouseEvents
                index={activeStep}
                onChangeIndex={handleStepChange}
            >
                {props.children}
            </SwipeableViews> 
            <MobileStepper
                    classes={{
                        dotActive: classes.dotActive
                    }}
                    steps={props.maxStep}
                    position="static"
                    activeStep={activeStep}
                    backButton={backButton()}
                    nextButton={nextButton()}
                /> 
        </Stack>   
    )
}