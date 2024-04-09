/**@module controller/google 
* @requires module:model/user
* @requires module:model/fridge
* @requires module:model/RouteID
*/
import mongoose from 'mongoose';
import User from '../model/user.js';
// import Fridge from '../model/fridge.js';
// import RouteID from '../model/util/RouteID.js';
import 'dotenv/config';

/**A controller for creating users who registered with google oauth.
 * @author Tyler Del Rosario
 * @param req {request} The request should contain a google object that has
 * all of the relevant information to create a new user.
 * @param res {response} After the successful creation of a user, the response should
 * redirect the user to their newly created fridge/pantry.
 */
const create_google_user = async function(req, res){
    try {
        const userID = "GOOGLE_" + req.google.id;
        await mongoose.connect(process.env.DB_URL).catch((err) => {throw err});
    
        /** Performs a query to the database to see if the user already
         * exists. If the user does not already exist, create a new one and store it within their
         * session data. Otherwise, do not create a new user, but still put the user data into
         * the session.
         * @var checkForDupe {User} 
         */
        const checkForDupe = await User.find({user_id: {$eq: userID}}).catch((err) => {throw err});

        if (checkForDupe.length === 0) {          
            const user = new User({
                name: req.google.name,
                user_id: userID,
                profile_pic: req.google.profilePicture
            });
            
            await user.save().then((result) => {
                const userID = result._id;

                req.session.userID = userID;
                res.redirect("http://localhost:3000/auth/google/user");
            }).catch((err) => {throw err});
        } else {
            const user = checkForDupe[0];
            req.session.userID = user._id;
            res.send(user);
        }
            

    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default create_google_user;
// "proxy": "http://localhost:3001",