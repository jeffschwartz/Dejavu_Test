define( function () {

    "use strict"; // of course!

    /*
     * Person is a 'vanilla class'
     * Has a name
     */
    var Person = function ( name ) {

        this.setName( name );

    };

    /*
     * Add to Person's prototype
     */
    Person.prototype.getName = function () {

        return this.name;

    };

    Person.prototype.setName = function ( name ) {

        this.name = name;

    };

    return Person;

} );
