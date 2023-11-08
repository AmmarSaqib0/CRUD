// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mssql");

app.set("view engine", "ejs");


// Get request
app.get('/', function (req, res) {

    // // Config your database credential
    // const config = {
    //     user: 'sa',
    //     password: '1226',
    //     server: 'DESKTOP-J22VOBB',
    //     database: 'ammar',
    //     trustServerCertificate: true
    // };

    // // Connect to your database
    // mssql.connect(config, function (err) {
    //     let request = new mssql.Request();
    //     request.query('select * from countries',
    //         function (err, records) {

    //             if (err) console.log(err)
    //             res.send(records);
    //         });
    // });
    res.render("viewdata.ejs");
});


let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});