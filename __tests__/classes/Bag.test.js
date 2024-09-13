const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person');

describe('Bag', ()=>{
    it('can create an instance of Bag', ()=>{
        const bag = new Bag(10, '58');
        expect(bag).toBeInstanceOf(Bag);
    });
    it('has correct weight and id', ()=>{
        const bag = new Bag(10,"221");
        expect(bag.weight).toBe(10);
        expect(bag.id).toBe("221");
    });
    it('has initial owner of null', ()=>{
        const bag = new Bag(10,"113");
        expect(bag.getOwner()).toBeNull();
    });
    it('can assign owner', ()=>{
        const bag = new Bag(10,"113");
        const person = new Person('John', 'NYC');
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});