import fs from "fs";
import readline from "readline";
const filePath=""
const data = []
async function readFile() {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream, crlfDelay: Infinity
    });

    for await (const link of rl) {

        data.push(link);
    }
}
