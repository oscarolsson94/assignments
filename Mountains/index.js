const { readFileSync } = require("fs");

const heightMap = readFile("./heightmap.txt");

function readFile(fileName) {
    const contents = readFileSync(fileName, "utf-8");

    const arrayOfRows = contents.split("\n");

    const cleanNumberArray = formatCharArrays(arrayOfRows);

    return cleanNumberArray;
}

function formatCharArrays(stringArray) {
    let cleanRows = [];

    stringArray.forEach((row) => {
        let cleanRow = row.replace("\r", "");
        cleanRows.push(Array.from(cleanRow));
    });

    return cleanRows;
}
