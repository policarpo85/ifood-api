const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRoutes = require('./routers/foodRoutes');  
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(bodyParser.json());
app.use('/api', foodRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
