import React from "react";
import logo from '../assets/logo.svg';
import '../styles/menu.css';
import menu from "../services/menu";
import MenuComponent from "./menu";
import { AppBar,Toolbar } from "@mui/material";
export default function NavBarComponent(){
   return(
       <AppBar sx={{backgroundColor:'white'}}>
            <Toolbar>
                <div className="root-menu">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu-item">
                        {menu.map((m,index)=>(
                            <MenuComponent menu={m} key={index}/>
                        ))}
                    </div>
                </div>
            </Toolbar>  
       </AppBar>
   )
}