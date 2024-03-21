import axios from 'axios'; // Import Axios

export const sendMsgToAI = async (msg) => {
  try {
    console.log(msg);
    const response = await axios.post('http://localhost:3001/', { message: msg }); // Pass msg to the server
    
    console.log('Server response:', response.data);
    return response.data.message; // Return the response data
  } catch (error) {
    console.error('Error communicating with server:', error);
    throw error; // Or handle the error gracefully
  }
};
