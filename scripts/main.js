require.config( {
    paths:{
        "mout":"libs/mout/src"
    },
    packages:[
        {
            name:"dejavu",
            location:"libs/dejavu/dist/strict"
        }
    ]
} );

require( ['jquery', 'employee', 'manager'], function ( $, Employee, Manager ) {

    "use strict";

    var employees = [],
        managedEmployees,
        manager = new Manager( 'Polus', 'Manager of Equity IT Division', 'Equity IT Division' );

    console.log( 'An Manager object was instantiated. Name: ', manager.getName(), ' Job Title: ', manager.getJobTitle(), ' Department: ', manager.getDepartment() );
    console.inspect( manager );

    employees.push( new Employee( 'Adam', 'Web Developer' ) );

    employees.push( new Employee( 'Baker', 'Java Developer' ) );

    employees.push( new Employee( 'Charlie', 'SQL Developer' ) );

    // log to the console information about each employee
    employees.forEach( function ( employee ) {
        console.log( 'An Employee object was instantiated. Name: ', employee.getName(), ' Job Title: ', employee.getJobTitle() );
        console.inspect( employee );

        // add each employee to their manager's staff
        manager.addStaff( employee );
    } );

    // ask the manager for an array of managed employees
    managedEmployees = manager.getStaff();

    // log to the console information about each managed employee
    managedEmployees.forEach( function ( managedEmployee ) {
        console.log( 'Employee', managedEmployee.getName() + ',', 'who is a', managedEmployee.getJobTitle() + ',', 'works under manager', manager.getName() + ',', 'who is in charge of the', manager.getDepartment() );
    } );

} );
