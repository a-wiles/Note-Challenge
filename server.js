const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs")
const Inquirer = require("inquirer");
const routesApi = require("./routes/routesapi");
const routesHtml = require("./routes/routeshtml");


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", routesApi);
app.use("/", routesHtml);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});