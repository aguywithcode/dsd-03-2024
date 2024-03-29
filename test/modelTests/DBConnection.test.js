import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set("strictQuery", false);
const dbURL = process.env.DB_URL;

describe("Database Connection", function() {
    it("Should connect to your database.", async function() {
        this.timeout(5000);
        return new Promise(function(resolve) {
            mongoose.connect(dbURL).then(() => {
                mongoose.disconnect().catch((error) => {
                    throw error;
                });

               resolve();
            }).catch((error) => {
                throw error;
            });
        });
    });
});