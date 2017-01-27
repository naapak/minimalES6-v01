// name of the plane
// manufacturer of the plane
// year of the pleane
// it has one action fly, print out i'm flying

export default class Plane{

		constructor(name,manufacturer,year){
				if(typeof name != undefined  && manufacturer !== undefined && year !== undefined){
				console.log(`the name of the plane is ${name}, the manufactuer of the plane is ${manufacturer}, the year of the plane is ${year}`)
				this.name = name;
				this.manufacturer=manufacturer;
				this.year= year;
				}
				else { console.log(`There is no plane in the code......`)	}

		}

		fly(plane) {

		let output = ""; // single-line quote assignment
        if ( plane.name !== "undefined" && plane.manufacturer !== undefined && plane.year !== undefined){
             output =`${plane.name} made by ${plane.manufacturer} in ${plane.year} is flying`;
        
        } else {
             output = ` yikess..... the plane is not there to fly try the bus`;
        }
        console.log( output );
    };	
 
};

