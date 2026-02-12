const express = require('express');
const app = express();
const healthRoute = require('./routes/healthRoute');
require('dotenv').config();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api', healthRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}); 