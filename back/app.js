const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./controllers/users')
const cors = require('cors')

const port = process.env.PORT || 3001;
mongoose.connect("mongodb://localhost:27017/test_routes_back_front",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

const app = express();
app.use(cors())

app.use(express.json());

app.use('/api/users', usersRoute);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});