const express = require('express');
// const db = require('./config/database')
const path = require('path')

const app = express();
const PORT = 3000 || process.env.PORT

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false, limit: '50mb'}))

app.listen(PORT, () => {
    console.log(`Application run on port ${PORT}`);
})