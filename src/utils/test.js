const axios = require('axios');

async function sendMsgToAI(msg) {
  try {
    console.log('Message:', msg);

    const response = await axios.post('http://100.25.196.93/ask_bot', null, {
      params: {
        message: msg
      },
      headers: {
        'accept': 'application/json'
      }
    });

    console.log('Response:', response.data); // Access the response data using response.data
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Call the function with a message
sendMsgToAI("bonjour")
  .then(data => {
    console.log('Response from sendMsgToAI:', data);
  })
  .catch(error => {
    console.error('Error from sendMsgToAI:', error);
  });
