/**
 * Created by Edward_J_Apostol on 2016-08-29.
 */
export default class Person{
// class is set of instruction needed to create an object. constucter function is the one that is always called first when creating a new object.
// no need to write function to call the function constructor. 
    constructor(firstName){
        console.log("Person created");
        if (typeof firstName != "undefined"){  //
            this.firstName = firstName;
            console.log("the person created is named " + firstName);
            this.init();
        } else {
            console.log("error! check index.js. you need a name as an" +
                ";argument when creating the person");
        }
    }

    init() {
        // assignable properties. available once a new Person()
        // is instantiated.
        // naresh comment - these properties are irrelavent to this code. only tells us that init() function is run once is person is given a name....
        this.car = "";
        this.hairColor = "";
        this.height = 0;
        this.weight = 0;

    };

}