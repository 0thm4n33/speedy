import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/rent.css';
export default function RentComponent(props){
    const navigate = useNavigate();
    const handleOnClick = (event) =>{
        let type = event.target.alt;
        if(type !== undefined){
            navigate(`rent/${type}`);
        }
    }
  
    const image = require(`../assets/rent/${props.rent.image}`);
    return(
        <div className="rent-container" onClick={handleOnClick}>
            <img src={image} alt={props.rent.name} className="rent-image"/>
            <span className="rent-title">{props.rent.name}</span>
            <span>{props.rent.nombreOfCars} cars</span>
        </div>
    )

}