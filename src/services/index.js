import cars from "./cars";
export default class Service{

    static getCarsByType(type){
        /*
        const carsByType = cars.filter(car => car.type === type);
        return carsByType;*/
        return cars;
    }
}