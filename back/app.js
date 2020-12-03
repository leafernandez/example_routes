const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./controllers/users')
const cors = require('cors')

const port = process.env.PORT || 3001;
mongoose.connect("mongodb://localhost:27017/back_front_test",
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}
);

const app = express();
app.use(cors())

app.use(express.json());

app.use('/users', usersRoute);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});