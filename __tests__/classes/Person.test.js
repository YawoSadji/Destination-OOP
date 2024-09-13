const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag');
describe('Person', ()=>{
    it('can create an instance of Person', ()=>{
        const person = new Person('Bob', 'Columbus');
        expect(person).toBeInstanceOf(Person);
    });
    it('has correct name and destination', ()=>{
        const person = new Person('James', 'NYC');
        expect(person.name).toBe('James');
        expect(person.destination).toBe('NYC');
    })
    it('has initial bags array empty', ()=>{
        const person = new Person('James','NYC');
        expect(person.getBags()).toEqual([]);
    });
    it('can add bag to bags array', ()=>{
        const person1 = new Person('Chris','Irving');
        const bag1 = new Bag(6, "234");
        person1.addBag(bag1);
        const bagAdded = person1.getBags();
        expect(bagAdded.length).toBe(1);
        expect(bagAdded[0]).toBe(bag1);
    });
});