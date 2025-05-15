const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');
const Contact = require('./models/contact');
const Event = require('./models/Event');

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://127.0.0.1:27017/contact_form_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered");
      } else {
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.json(err));
      }
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("No records found!");
      }
    });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(409).json({ error: 'Contact with this email already exists' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error('Error in /api/contact:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/event', async (req, res) => {
  try {
    const { firstName, lastName, eventName, startDate, startTime, endDate, endTime, address } = req.body;

    if (!firstName || !lastName || !eventName || !startDate || !startTime || !endDate || !endTime || !address) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newEvent = new Event({ firstName, lastName, eventName, startDate, startTime, endDate, endTime, address });
    await newEvent.save();
    res.status(201).json({ message: 'Event submitted successfully' });
  } catch (err) {
    console.error('Error in /api/event:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// GET route to retrieve all events
app.get('/api/event', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});
app.put('/api/event/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedEvent);
  } catch (err) {
    console.error('Error updating event:', err);
    res.status(500).json({ error: 'Failed to update event' });
  }
});
// DELETE event by ID
app.delete("/api/event/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
