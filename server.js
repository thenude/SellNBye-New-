const  express = require('express');
const app = express();
const  bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const  PayRoutes = express.Router();
const PORT = 3000;
const  server = require('repl');


app.use(cors());
app.use(bodyParser.json());
app.use('/payment', PayRoutes);

//connection db
mongoose.connect( 'mongodb://127.0.0.1:27017/sellnbye' ,{useNewUrlParser: true})
    .then(onfulfilled : () =>{
        return server.start()
}) .catch(onRejected: err => {
    console.error(err);
    process.exit(code: 1);

});

const  connection = mongoose.connection;
connection.once('open', function () {
    console.log('MongoDB datbase connection establishmend successfully');

});

require('./routes/api/PaymentDetailManage')(app);

app.listen(PORT, callback: function () {
    console.log("Server is Running on Port: " + PORT);

});