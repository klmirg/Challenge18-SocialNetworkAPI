const db = require('./config/controllers')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));



// mongoose.set('debug', true);
db.once('open', () => {
app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));
})