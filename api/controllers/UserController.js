/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	* Register
 	*
	* @description :: Registers a User
	* @Request :: User Object
	* @Response :: User Object
	*/

	register: function(Request, Response){
		Register.user(Request,Response);
	}
	
};

