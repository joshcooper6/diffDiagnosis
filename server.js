const next = require('next');
const express = require('express');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(dev);

const port = 3000;

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);

app.prepare().then(() => {
  const server = express();

  server.get('/', async (req, res) => {
    return app.render(req, res, '/pages/index');
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

// mongoose.connect(YOUR_MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('error', (err) => {
//   console.error(err);
//   console.log('MongoDB connection error. Please make sure MongoDB is running.');
// });