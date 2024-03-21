const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);

  try {
    const response = await axios.post('http://100.25.196.93/ask_bot', null, {
      params: {
        message: message
      },
      headers: {
        'accept': 'application/json'
      }
    });

    const finalResponse = {
      message: `${response.data}`,
    };

    res.json(finalResponse);
  } catch (error) {
    console.error('Error while communicating with the bot server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
