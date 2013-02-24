define( ['dejavu', 'person'], function ( dejavu, Person ) {

    "use strict"; // of course!

    /*
     * Employee is derived from Person
     * Inherits name from Person and also has a job title
     */
    return dejavu.Class.declare( {

        $extends : Person,

        $name : 'Employee',

        _jobTitle : null, // 1 underscore = protected property

        initialize : function ( name, jobTitle ) {
            this.$super( name );
            this.setJobTitle( jobTitle );
        },

        setJobTitle : function ( jobTitle ) {
            this._jobTitle = jobTitle;
        },

        getJobTitle : function () {
            return this._jobTitle;
        }

    } );

} );
