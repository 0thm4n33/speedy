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
        localStorage.setItem('reservations',JSON.stringify(this.reservations));
    }

    getReservations(){
        this.reservations = JSON.parse(localStorage.getItem('reservations'));
        return this.reservations;
    }

    getCarsByType(type){
        const brand = type.toLowerCase();
        console.log(`brand: ${brand}`);
        if(['audi','bmw','volkswagen','mercedes-benz'].indexOf(brand)===-1){
            return cars;
        }
        else{
            const result = cars.filter(car => car.marque === brand);
            console.log(`result: ${result}`);
            return result;
        }
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