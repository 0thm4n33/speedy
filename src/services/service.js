import cars from "./cars";
let users = [
    {
        email:"admin@admin.com",
        password:"admin"
    }
]
export default class Service{
    constructor(){
        this.reservations = [];
    }

    addReservation(reservation){
        this.reservations.push(reservation);
        console.log(reservation);
    }

    getReservations(){
        return this.reservations;
    }

    getCarsByType(type){
        /*
        const carsByType = cars.filter(car => car.type === type);
        return carsByType;*/
        return cars;
    }
    
    authenticate(user){
        let authenticated = false
        users.find((u)=>{
            if(u.email === user.email && u.password === user.password){
                console.log("founded !!");
                authenticated =  true;
            }
        });
        return authenticated;
    } 
}