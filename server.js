const express = require('express');
const path = require('path');
const api = require('./routes/controller.js');
const viewRoutes = require('./routes/view.js');
const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static('public'));

app.use('/api', api);
app.use('/', viewRoutes);
// Wildcard route to direct users to a 404 page


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);