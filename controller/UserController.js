import mongoose from 'mongoose';
import User from '../model/user.js';
import Fridge from '../model/fridge.js';
import RouteID from '../model/util/RouteID.js';
import 'dotenv/config';


const create_google_user = async function(req, res){
    try {
        const userID = "GOOGLE_" + req.google.id;
        await mongoose.connect(process.env.DB_URL).catch((err) => {throw err});
    
        //Making sure we don't duplicate a user.
        const checkForDupe = await User.find({user_id: {$eq: userID}}).catch((err) => {throw err});
        console.log(checkForDupe);
        if (checkForDupe.length === 0) {          
            const user = new User({
                name: req.google.name,
                user_id: userID,
                profile_pic: req.google.profilePicture
            });
            
            await user.save().then((result) => {
                const userID = result._id;
                
                req.session.userID = userID;
            }).catch((err) => {throw err});
        }
            res.send(req.session);

    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default create_google_user;