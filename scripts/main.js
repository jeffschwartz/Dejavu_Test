require.config( {
    paths:{
        "mout":"libs/mout/src"
    },
    packages:[
        {
            name: "dejavu",
            location: "libs/dejavu/dist/strict"
        }
    ]
} );

require( ['jquery', 'employee', 'manager'], function ( $, Employee, Manager ) {

    "use strict";

    // Instantiate an Employee object with name and job title
    var employee = new Employee( 'Polo', 'Programmer' );
    console.log( 'An Employee object was instantiated. Name: ', employee.getName(), ' Job Title: ', employee.getJobTitle() );
    console.inspect( employee );

    // Instantiate a Manager object with name, job title and department
    var manager = new Manager( 'Polus', 'Manager of Equity IT Division', 'Equity IT Division' );
    console.log( 'An Manager object was instantiated. Name: ', manager.getName(), ' Job Title: ', manager.getJobTitle(), ' Department: ', manager.getDepartment() );
    console.inspect( manager );

} );
