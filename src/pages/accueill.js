import { Card, CardContent } from "@mui/material";
import React from "react";
import rents from '../services/rentCar';
import RentComponent from "../components/rent";
import SwipeComponenet from "../components/swipe";
import MediaDisplay from "../components/mediaDisplay";
import BrandComponent from "../components/brand";
const medias = [
    {'type':'image','url':'bmw-1.webp'},
    {'type':'video','url':'https://www.youtube.com/watch?v=FzQgRnvwtIY&t'},
    {'type':'image','url':'benzo-1.jpg'}
]
const brands = [
    {'name':'Mercedes-Benz','logo':'mercedes-benz.webp','nombreOfCars':0},
    {'name':'Bmw','logo':'bmw-logo.webp','nombreOfCars':0},
    {'name':'Audi','logo':'audi-logo.jpg','nombreOfCars':0},
    {'name':'Volkswagen','logo':'golf-logo.png','nombreOfCars':0}
]
export default class AcceuillPage extends React.Component{
    render(){
        return(
            <Card sx={{borderRadius:'30px'}}>
                <SwipeComponenet maxStep={medias.length}>
                    {medias.map((media)=>(
                        <MediaDisplay type={media.type} url={media.url} />
                    ))}                       
                </SwipeComponenet>
                <CardContent>
                    <h4>Type</h4>
                    <div className="card-content-rent">
                        {rents.map((rent)=>(
                            <RentComponent rent={rent} />
                        ))}
                    </div>
                    <h4>Marque</h4>
                    <div className="card-content-brand">
                            <BrandComponent brands={brands}/>
                    </div>
                </CardContent>
            </Card>
        )
    }
}