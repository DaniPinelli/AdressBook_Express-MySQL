const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importing routes
const contactRoutes = require('./routes/contact');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'adress_db'
}, 'single'));


//Routes
app.use('/', contactRoutes);

//Statics files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => console.log(`Server on port 3000`));