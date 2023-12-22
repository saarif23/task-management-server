require("dotenv").config();
const app = require("./src/app");
const http = require('http');
const connectDB = require("./src/db/connectDB");
const server = http.createServer(app);

const port = process.env.PORT || 5000;

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`task manage web is running on port ${port}`);
    });
}
main();