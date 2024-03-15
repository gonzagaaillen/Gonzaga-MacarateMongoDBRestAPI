const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = "mongodb://127.0.0.1:27017/";

app.use(express.json());

mongoose.connect(url, {})
.then(() =>{
    console.log('Database connected')
})
.catch((err) => {
    console.log('error connecting to db...', err)
});

const EmployeeRoute = require('./Routes/employee_details.route');
app.use('/employee_details/', EmployeeRoute);

const InventoryRoute = require('./Routes/inventory.route');
app.use('/inventory', InventoryRoute);

const PhoneRoute = require('./Routes/phone_inventory.route');
app.use('/phone_inventory', PhoneRoute);

const port = "3000";
app.listen(port,  () => {
    console.log(`listening to port ${port}....`)
});