// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mssql");
const dotenv = require('dotenv');
dotenv.config();
// Config your database credential
const config = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    trustServerCertificate: true
};

app.use(express.urlencoded({ extended: true }));
// app.use(express.json())

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render('addData.ejs');
})

app.post('/', function (req, res, err) {
    if (err) console.log(err);
    console.log(req.body.empId);
    mssql.connect(config, function (err) {
        let request = new mssql.Request();
        request.query('create new',
            function (err) {
                if (err) console.log(err)
            });
    });
    res.redirect(`/`);
});

// Get request
app.get('/view', function (req, res) {

    // Connect to your database
    mssql.connect(config, function (err) {
        let request = new mssql.Request();
        request.query('select * from employees',
            function (err, records) {
                if (err) console.log(err)
                res.render("viewdata.ejs", { records: records.recordset });
            });
    });
});


let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});