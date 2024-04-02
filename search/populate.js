import fs from 'fs';
import readline from 'readline';

async function lineReader() {
    const foodFile = fs.createReadStream("./FoodCSV/foundation_food.csv");
    const set = {

    };

    const refObj = {

    };

    const reader = readline.createInterface({
        input: foodFile,
        crlfDelay: Infinity
    });

    for await (const line of reader) {
        const arr = line.split(";");
        const ID = arr[0];
        const description = arr[2];

        if (set[description] === undefined) {
            set[description] = true;
            
            const descArr = description.split(", ");

            for (const adjective of descArr) {
                let split = adjective.toLowerCase()
                    .replace(/[^a-zA-Z0-9"-"%"]/g, " ").split(" ");

                for (const word of split) {
                    if (refObj[word] === undefined) {
                        if (word !== "") {
                            refObj[word] = [ID];
                        }
                    } else {
                        refObj[word].push(ID);
                    }
                }
            }
        }
    }

    const ordered = Object.keys(refObj).sort().reduce((obj, key) => {
        obj[key] = refObj[key];
        return obj;
    }, {});

    console.log(ordered);
}

lineReader();