//Calling the Modules we need
const express = require('express');
const connectDB = require("./config/connect");
const User = require('./Models/User')
//Defining a 5000 like my server Port
const port = 5000;

// Connect to my BD
connectDB();


const app = express();
app.use(express.json());

app.use('/api/users', require('./routes/User'));

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
}
)

app.listen(port, (err) => err ? console.error(err) : console.log(`the server is running: http://localhost:${port}`));
