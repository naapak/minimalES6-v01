/**
 * Created by Edward_J_Apostol on 2016-08-29.
 */
// this is where the "main" section of your app begins.
// its like a launch pad, where you bring all your other classes
// together for use.

import Person from './Person'; //importing something specific "person" from file Person
import Car from './Car';
import Plane from './Plane';



let edward = new Person("Edward");
let eds_car = new Car("ford");

let cessna = new Plane("cessna","boeing","1972");
cessna.fly(cessna);// the argument is Plane.fly(plane) the new Plane = cessna and argument plane is also cessna in this case.. the plane in this case is cessna
let crapplane = new Plane("hero","naresh","");
crapplane.fly(crapplane); 

edward.car = eds_car;
edward.car.drive(edward); // edward.car is the object, the method is drive and the parameter is edward is a type person.  

let naresh = new Person();
let naresh_car = new Car ();
naresh_car.drive(naresh); // the argument is class Car&&drive(person) 


