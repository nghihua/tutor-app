const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.port || 5000;

// middleware
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
//app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`running on port ${port}`);
});

// routes
app.get('/', (req, res) => {
    res.send("hello");
});

const api = require('./api')
app.use('/api/', api)