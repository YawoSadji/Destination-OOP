class Airport {
static airportCode;
#planes;
constructor(name){
this.name = name;
this.#planes = [];
}
addPlane(plane){
     this.#planes.push(plane);
}
getPlanes(){
return this.#planes;
}

}


module.exports = Airport;