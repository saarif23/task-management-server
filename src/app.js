const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddlewares');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// all routes
const userRoute = require('./routes/Users/index')
const taskRoute = require('./routes/Task/index')
const authenticationRoutes = require('./routes/Authenticaton/index');
// const petsRoutes = require('./routes/Pets/index')



//------------------all middlewares------------------------
applyMiddleware(app);
app.use(userRoute);
app.use(taskRoute);
app.use(authenticationRoutes);





app.get("/health", (req, res) => {
    res.send("Welcome to the task manage web server  ....");
});

app.all("*", (req, res, next) => {
    const error = new Error(`the request url  is invalid ${req.url}`)
    error.status == 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    })
})



module.exports = app;