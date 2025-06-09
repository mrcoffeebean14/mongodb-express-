const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const chat = require('./model/chats.js');
const methodOverride = require('method-override');

// Database connection
main()
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Setup view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); // ✅ this serves CSS, images, etc.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send("working root");
});

app.get('/chats', async (req, res) => {
  try {
    const chats = await chat.find();
    res.render('chats.ejs', { chats });
  } catch (err) {
    console.error(err);
    res.status(500).send(' Server Error');
  }
});



app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});
app.post('/chats', async (req, res) => {
  const { from, to, message } = req.body;

  try {
    const newChat = new chat({
      from,
      to,
      message,
      time: new Date()
    });

    await newChat.save(); 
    res.redirect('/chats');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/chats/msg/:id', async (req, res) => {
    const id = req.params.id;
  try {
    const chats = await chat.findById(id);
    res.render('msg.ejs', { chats });
  } catch (err) {
    console.error(err);
    res.status(500).send('Inal Server Error');
  }
});

app.get('/chats/msg/:id/edit', async (req, res) => {
    const id = req.params.id;
  try {
    const chats = await chat.findById(id);
    res.render('edit.ejs', { chats });
  } catch (err) {
    console.error(err);
    res.status(500).send('Inal Server Error');
  }
});

app.patch('/chats/msg/:id', async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
    await chat.findByIdAndUpdate(id, {
      message,
      time: new Date()
    });

    res.redirect(`/chats/msg/${id}`);
  } catch (err) {
    console.error('Error updating:', err);
    res.status(500).send('Failed to update message');
  }
});

app.delete('/chats/msg/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await chat.findByIdAndDelete(id);
    res.redirect('/chats');
  } catch (err) {
    console.error('Error deleting chat:', err);
    res.status(500).send('Failed to delete message');
  }
});


// Start server
app.listen(3000, () => {
  console.log("Server working on http://localhost:3000");
});
