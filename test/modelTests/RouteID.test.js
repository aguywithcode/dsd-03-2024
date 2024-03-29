import Mockup from "./helper/modelID.mockup.js";
import RouteID from "../../model/util/RouteID.js";
import { expect } from "chai";

describe("RouteID", function() {
    it("should throw an error for wrong object instances.", async function() {
        const wrongInstance = Mockup.falseModel;

        return RouteID(11, wrongInstance).then(() => {
            assert.fail();
        }).catch((error) => {
            expect(error.message).to.equal("model must be an instance of mongoose Model.");
        });
    });

    it("should handle and throw an error received from query attempt.", async function() {
        const errorInstance = Mockup.errorCheck;

        return RouteID(11, errorInstance).then(() => {
            assert.fail();
        }).catch((error) => {
            expect(error.message).to.equal("ServerError: RouteID Test = This should be thrown or logged!");
        });
    });

    it("should return a valid routeID and handle duplication.", async function() {
        const dupeCheck = Mockup.dupeCheck;

        const ID = await RouteID(11, dupeCheck).catch((error) => {
            throw error;
        });
        
        expect(typeof ID).to.equal("string");
        expect(ID.length).to.equal(11);
    });
});
