const Airport = require("../../classes/Airport");
const Person = require("../../classes/Person");
const Plane = require("../../classes/Plane");
describe('Plane', ()=>{
    
    it('has correct company, origin  and destination', ()=>{
        const plane = new Plane('American Airlines','NYC');

        expect(plane.company).toBe('American Airlines');
        expect(plane.origin).toBe(Airport.airportCode);
        expect(plane.destination).toBe('NYC');
    });
    it('has initial passengers empty array', ()=>{
        const plane = new Plane('American Airlines','NYC');
        expect(plane.getPassengers()).toEqual([]);
    });
    it('can add passenger to passengers array', ()=>{
        const plane1 = new Plane('American Airlines','NYC');
        const person1 = new Person('James',"NYC");
        plane1.addPassenger(person1);
        const returnedPassenger = plane1.getPassengers();
        expect(returnedPassenger.length).toBe(1);
        expect(returnedPassenger[0]).toBe(person1);
    });

});