require('dotenv').config();
const sequelize = require('./database/db');
const express = require('express');
const userRoute = require("./routes/user");
const instaUserRoute = require("./routes/insta_user");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);
app.use("/insta", instaUserRoute);

const port = process.env.PORT || 5000;

sequelize.sync().then(() => {
    console.log(`Database Connected`);
    app.listen(port, () => {
        console.log(`Server started at port : ${port}`);
    });
}).catch((err) => {
    console.error(`Error : ${err}`);
});