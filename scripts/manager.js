define( ['dejavu', 'employee'], function ( dejavu, Employee ) {

    "use strict"; // of course!

    /*
     * Manager is derived from Employee
     * Inherits name from Person, job title from Employee and also has a department
     */
    var Manager = dejavu.Class.declare( {

        $extends:Employee,

        $name:'Manager',

        _department:null, // 1 underscore = protected property

        initialize:function ( name, jobTitle, department ) {
            this.$super( name, jobTitle );
            this.setDepartment( department );
        },

        setDepartment:function ( department ) {
            this._department = department;
        },

        getDepartment:function () {
            return this._department;
        }

    } );

    return Manager;

} );
