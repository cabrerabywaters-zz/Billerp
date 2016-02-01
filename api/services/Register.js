module.exports = {
    user: function(Request,Response){

    	var Passwords = require('machinepack-passwords');

		// Encrypt a string using the BCrypt algorithm.
		Passwords.encryptPassword({
			password: Request.param('password'),
		})
		.exec({
			// An unexpected error occurred.
			error: function (err){
			 	return Response.negotiate(err);
			},
			// OK.
			success: function (encryptedPassword){
			 	var Gravatar = require('machinepack-gravatar');

				// Build the URL of a gravatar image for a particular email address.
				Gravatar.getImageUrl({
				emailAddress: Request.param('email'),										
				}).exec({
					error: function (err){
			 			return Response.negotiate(err);
					},
					success: function (GravatarUrl){
						User.create(
							{
							name: Request.param('name'),
							email: Request.param('email'),
							encryptedPassword: encryptedPassword,
							lastLoggedIn: new Date(),
							gravatarUrl: GravatarUrl
							}, 
							function UserCreated(err,User){
								if(err){
									
						            console.log("err.invalidAttributes: ", err.invalidAttributes)

						            // If this is a uniqueness error about the email attribute,
						            // send back an easily parseable status code.
						            if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
						                && err.invalidAttributes.email[0].rule === 'unique') {
						                return Response.emailAddressInUse();
						            }
								}

								return Response.json({
									id : User.id
								})
							}

							
						)
					}

				});
			}
		});
        
    }
}
