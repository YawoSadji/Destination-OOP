const Airport = require("./Airport");


class Plane {
#passengers;
static origin = Airport.airportCode;
constructor(company, destination){
this.company = company;
this.destination = destination;
this.#passengers = [];
}
addPassenger(passenger){
    this.#passengers.push(passenger);
}
getPassengers(){
    return this.#passengers;
}
}


module.exports = Plane;