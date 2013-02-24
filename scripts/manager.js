define( ['dejavu', 'employee'], function ( dejavu, Employee ) {

    "use strict"; // of course!

    /*
     * Manager is derived from Employee
     * Inherits name from Person, job title from Employee and also has a department
     */
    return dejavu.Class.declare( {

        $extends : Employee,

        $name : 'Manager',

        _department : null, // 1 underscore = protected property

        __staff : [], // 2 underscores = private property

        initialize : function ( name, jobTitle, department ) {
            this.$super( name, jobTitle );
            this.setDepartment( department );
        },

        setDepartment : function ( department ) {
            this._department = department;
        },

        getDepartment : function () {
            return this._department;
        },

        addStaff : function ( employee ) {
            this.__staff.push( employee );
        },

        getStaff : function () {
            return this.__staff;
        }

    } );

} );
