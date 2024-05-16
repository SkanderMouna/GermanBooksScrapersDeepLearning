const fs = require('fs');

function getObjectLength(jsonPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                const jsonObject = JSON.parse(data);
                const keys = Object.keys(jsonObject);
                const jsonArray = JSON.parse(data);
                console.log(jsonArray[0])
                resolve(keys.length);
            } catch (error) {
                reject(error);
            }
        });
    });
}

// Replace 'data.json' with the path to your JSON file
const jsonPath = 'data.json';

getObjectLength("booksInfo.json")
    .then(length => {
        console.log('Length of the object in the JSON file:', length);
    })
    .catch(error => {
        console.error('Error:', error);
    });

