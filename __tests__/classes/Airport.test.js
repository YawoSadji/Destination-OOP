const Airport = require("../../classes/Airport");
const Plane = require('../../classes/Plane');
describe('Airport', ()=>{
    it('has correct name and airportCode', ()=>{
        const airport1 = new Airport('John Glenn Airport');
        expect(airport1.name).toBe('John Glenn Airport');
    });
    it('has initial planes empty array', ()=>{
        const airport = new Airport('John Glenn Airport');
        expect(airport.getPlanes()).toEqual([]);
    });
    it('can add plane to planes array', ()=>{
        const airport = new Airport('John Glenn Airport');
        const plane = new Plane('United Airlines', 'Columbus');
        airport.addPlane(plane);
        const returnedPlanes = airport.getPlanes();
        expect(returnedPlanes.length).toBe(1);
        expect(returnedPlanes[0]).toEqual(plane);
    });
});