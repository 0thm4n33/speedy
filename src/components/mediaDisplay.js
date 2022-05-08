import React from "react";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactPlayer from "react-player";
import '../assets/images/benzo-1.jpg'

const useStyle = makeStyles({
    baseStyle : {
        width:"175vh",
        height:"80vh",
        margin:"20px",
        borderRadius:"20px",
    },
    imgcontainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        position:"absolute",
        color:"white",
        fontWeight:"bold",
        fontFamily:"Poppins",
        textAlign:"center",
        width:"100%",
        fontSize:"large"
    }
});
export default function MediaDisplay({type, url,style}){
    const classes = useStyle();
    let image = null;
    if(type === 'image'){
        console.log('image:'+url)
        image = require(`../assets/images/${url}`);
    }
    return(
        <div className={style === undefined ? classes.imgcontainer : null}>
            {
                type === "video" ?
                <CardMedia className={classes.baseStyle}>
                    <ReactPlayer 
                        url={url}
                        width="100%"
                        height="100%"
                    />
                </CardMedia> :
                 <CardMedia
                    className={style === undefined ? classes.baseStyle : null}
                    image={image}
                />
            }
            <div className={classes.title}>
                    SPEEDY DRIVER LOCATION
            </div>
        </div>
    )
}