/**@module model/RouteID */
import mongoose from "mongoose";

/** Creates short and simple IDs for use in URL endpoints while guaranteeing uniqueness.
 * @author Tyler Del Rosario
 * @param length {number} Defines the length of the routeID to generate.
 * @param model {Schema} Enables routeID to check for duplicates against different types
 * of documents.
*/
const RouteID = async function(length, model) {
    const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    + "123456789";
    let routeID;

    while (!(await checkIfUnique(routeID))) {
        routeID = "";

        //Build routeID by appending random characters from characterSet.
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
        
            routeID += characterSet.charAt(randomIndex);
        }
    }

    //This gets hoisted up to top of RouteID container.
    async function checkIfUnique(ID) {
        if (!ID) {
            return false;
        }

        //Guarantees that model is a mongoose Model. JS has no type safety and
        //its particularly important that model is always a mongoose Model.
        if (Object.getPrototypeOf(model) === mongoose.Model) {
            let unique = true;
            const result = await model.findById(ID).catch((e) => {
                throw new Error("ServerError: " + e.message);
            });

            if(result) {
                unique = false;
            }

            return unique;
        } else {
            throw new Error("model must be an instance of mongoose Model.");
        }
    }

    return routeID;
}

export default RouteID;