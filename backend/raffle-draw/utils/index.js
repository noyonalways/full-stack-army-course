const fs = require("fs/promises");
const path = require("path");
const dbPath = path.resolve('data', 'db.json');

exports.readFile = async () => {
    try {
        const data = await fs.readFile(dbPath);
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error.message);
        // Return null or an empty object based on your use case
        return null;
    }
};

exports.writeFile = async (data) => {
    try {
        await fs.writeFile(dbPath, JSON.stringify(data));
    } catch (error) {
        console.error("Error writing file:", error.message);
        // Handle the error as needed
    }
};
