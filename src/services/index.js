import cars from "./cars";

export default class Service{

    constructor(){
        this.reservations = this.reservations.bind(this);
    }

    getCarsByType(type){
        /*
        const carsByType = cars.filter(car => car.type === type);
        return carsByType;*/
        return cars;
    }

     saveReservation(reservation){
        this.reservations.push(reservation);
        console.log(this.reservation);
    }
}