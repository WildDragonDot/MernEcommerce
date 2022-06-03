const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database.js');

/* ---------------------- //Handling Uncaught Exception --------------------- */
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shuting down the server due to uncaught Exception`);
    process.exit(1);
})
//config

dotenv.config({ path: "Backend/config/config.env" });

//Connectiong to database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`listening on port http://localhost:${process.env.PORT}`);
});

/* ----------------------- Unhandals promis rejection ----------------------- */
process.on("unhandledRejection", err => {
    console.log(`Error: ${err}`);
    console.log(`Shuting down the server due to unhandeled Promis Rejection`);
    server.close(() => {
        process.exit(1);
    });
})