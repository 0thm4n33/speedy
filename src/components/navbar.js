import React from "react";
import logo from '../assets/logo.svg';
import '../styles/menu.css';
import {Call,SupervisorAccountOutlined} from '@mui/icons-material';
import { AppBar,Box,Chip,Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menuItem = [
    {name:"+33123456",icon:<Call style={{fill:"white"}}/>},
    {name:"Espace Membre",icon:<SupervisorAccountOutlined style={{fill:"white"}}/>}
]

export default function NavBarComponent(){
    const navigate = useNavigate();
    const handleOnClick = (event) =>{
       const value = event.target.innerText;
       if(value === "Espace Membre"){
         navigate("/admin/authentication");
       }
   }
   return(
       <AppBar sx={{backgroundColor:'white'}}>
            <Toolbar>
                <div className="root-menu">
                    <div className="logo">
                        <Box component={"img"} src={logo} alt="logo" width={"80%"}  />
                    </div>
                        {menuItem.map((item)=>(
                            <div className="menu-item">
                                <Chip 
                                    label={item.name} 
                                    icon={item.icon}
                                    sx={{backgroundColor:"red",color:"white",width:{md:"50%",xs:"100%"},fontSize:"medium",fontFamily:"Poppins",fontWeight:"bold"}}
                                    onClick={handleOnClick}
                                />
                            </div>
                        ))}
                </div>
            </Toolbar>  
       </AppBar>
   )
}