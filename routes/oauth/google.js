import express from 'express';
import 'dotenv/config';
import token_client from '../../oauth/google/google_token_client.js';
import data_client from '../../oauth/google/google_data_client.js';
import controller from '../../controller/UserController.js';
const router = express.Router();

const google_ID = process.env.GOOGLE_ID;
const google_scope = process.env.GOOGLE_SCOPE;
const google_redirect = process.env.GOOGLE_REDIRECT;

//SENDS USERS TO OAUTH CONSENT SCREEN.
router.get("/", (req, res) => {
    const authRedirect = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="
     + google_redirect + "&prompt=consent&response_type=code&client_id="
     + google_ID + "&scope=" + google_scope + "&access_type=offline";;
    res.redirect(authRedirect);
});

//GETS AUTHORIZATION TOKENS.
router.get("/callback", async (req, res, next) => {
    const code = req.query.code;
    
    if (code != undefined) {
        await token_client(code).then((response) => {
            req.google_tokens = response;

            //store tokens inside request and push it to the next module.
            next();
        }).catch((error) => {
            return res.status(400).send({
                message: error.message
            });
        });
    } else {
        //HANDLE DENIAL HERE.
        return res.status(400).send({
            message: "Invalid or missing code"
        });
    }
});

//FETCH USERS DATA USING TOKENS
router.get("/callback", async (req, res, next) => {

    await data_client(req.google_tokens).then((response) => {
        req.google = {};
        req.google.id = response.id;
        req.google.name = response.name;
        req.google.profilePicture = response.picture;

        next();
    }).catch((error) => {
        return res.status(400).send({
            message: error.message
        });
    });
});

//PUSHES GOOGLE DATA TO CONTROLLER.
router.get("/callback", controller)

//TEST ROUTE. TEMPORARY
router.get("/user", (req, res) => {
    res.send(req.session.userID);
});

export default router;