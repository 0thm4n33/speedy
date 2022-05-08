import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {AttachMoneyOutlined, CancelOutlined,CreditCardOffOutlined,LocationOnOutlined, PaymentsOutlined, SupportOutlined} from "@mui/icons-material"
import React from "react";
const useStyle = makeStyles({
    text:{
        fontFamily:"Poppins",
        fontWeight:"bold",
        margin:"5px",
    },
    icon:{
        fontSize:"medium",
        padding:"9px"
    }
})

export default function DetailsRent({data}){
   
    const style = useStyle();
    const details = [
        {icon:<AttachMoneyOutlined className={style.icon}/>,name:"Security Amount",value:1000},
        {icon:<CreditCardOffOutlined className={style.icon}/>,name:"Security Type",value:"Card Only"},
        {icon:<PaymentsOutlined className={style.icon}/>,name:"Payment Type",value:"Credit Card,Cash"},
        {icon:<SupportOutlined className={style.icon}/>,name:"24x7 Customer Support",value:"Yes"},
        {icon:<LocationOnOutlined className={style.icon} />,name:"Free Delivery ",value:"Yes"},
        {icon:<CancelOutlined className={style.icon} />,name:"Free Cancellation ",value:"Yes"},
    ];
    return(
        details.map(d=>(
            <Box sx={{
                backgroundColor:"#EFECE2",
                height:"3%",
                display:"flex",
                justifyContent:"space-between",
                border:"1px solid black",
                margin:"5px",
                }}>
                {}
                <Box display={"flex"}>
                    {d.icon}
                    <Typography className={style.text}>
                        {d.name}
                    </Typography>
                </Box>
                <Typography className={style.text}>{d.value}</Typography>
            </Box>
        ))
    )
}