import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle, Ford } from './03-liskov-b(aplicado)';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        cars.forEach(car=>{

            console.log(car.constructor.name, car.getNumberOfSeats());
            // como es una clase se tiene el metodo constructor del cual podemos extraer el nombre de la clase con constructor.name
            
        })
        
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(4)
    ];


    printCarSeats( cars );

})();