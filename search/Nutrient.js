import fs from 'fs';
import readline from 'readline';
//import nutrient_names from './conversions/NutrientConversion.js';
import nutrient_names from './conversions/NutrientConversion';

async function Nutrient() {
    //Initialize nutrient list from relevant excel file.
    const list = await nutrients();

    async function nutrients() {
        const file = fs.createReadStream("./FoodCSV/foundation_nutrient.csv");
        let list = [];

        const reader = readline.createInterface({
            input: file,
            crlfDelay: Infinity
        });

        for await (const line of reader) {
            const nutrientArr = line.split(",");
            let obj = {};
            let name = await nutrient_names.search(nutrientArr[2]).catch((err) => {throw err;});

            obj.fdc_id = Number(nutrientArr[1]);
            obj.nutrient_id = Number(nutrientArr[2]);
            if (name != false) {
                obj.nutrient_name = name;
            }
            obj.amount_100g = Number(nutrientArr[3]);
            obj.amount_per_gram = Number(Math.round(Number(nutrientArr[3])+'e2')+'e-2') / 100;

            list.push(obj);
        }

        return list;
    };

    async function binarySearch(ID) {
        let min = 0;
        let max = list.length - 1;

        while (min <= max) {
            let mid = Math.floor((max + min) / 2);

            if (list[mid].fdc_id < ID) {
                min = mid + 1;
            } else if (list[mid].fdc_id > ID) {
                max = mid - 1;
            } else {
                return resultSpread(ID, mid);;
            }
        }

        return false;
    }

    function resultSpread(ID, index) {
        let resultList = [list[index]];
        let ascending = index + 1;
        let descending = index - 1;
    
        //Ascending
        while (list[ascending].fdc_id === ID) {
            resultList.push(list[ascending]);
            ascending++;
        }

        //Descending
        while (list[descending].fdc_id === ID) {
            resultList.unshift(list[descending]);
            descending--;
        }

        return resultList;
    }

    return {
        nutrient_list: list,
        searchByFDC: binarySearch
    }
}

const nutrients = await Nutrient();


console.dir(await nutrients.searchByFDC(323294), {'maxArrayLength': null});

//  console.log(await nutrients.searchByFDC(323294));
//  export default Nutrient();
const list = nutrients.nutrient_list;
export default nutrients;