//Add edge-case protection

const { readFileSync } = require("fs");

calculateCourse("./instructions.txt");

function calculateCourse(file) {
    const instructions = readFile(file);

    const result = followInstructions(instructions);

    console.log(result);
}

function followInstructions(arrayOfInstructions) {
    let horizontalPos = 0;
    let verticalPos = 0;
    let direction = 0;

    arrayOfInstructions.forEach((instruction) => {
        const command = instruction.split(" ")[0];
        const index = Number(instruction.split(" ")[1]);

        switch (command) {
            case "forward":
                horizontalPos += index;
                verticalPos += index * direction;
                break;
            case "up":
                direction += index;
                break;
            case "down":
                direction -= index;
                break;
            default:
                return null;
        }
    });

    return horizontalPos * verticalPos;
}

function readFile(fileName) {
    const contents = readFileSync(fileName, "utf-8");

    const arrayOfRows = contents.split("\n");

    const cleanTextArray = formatStringArray(arrayOfRows);

    return cleanTextArray;
}

function formatStringArray(array) {
    let cleanRows = [];

    array.forEach((row) => {
        let cleanRow = row.replace("\r", "");
        cleanRows.push(cleanRow);
    });

    return cleanRows;
}
