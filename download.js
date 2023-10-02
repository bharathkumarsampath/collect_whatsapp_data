const axios = require('axios');
const fs = require('fs');

// URL of the image to download
const imageUrl = 'https://pps.whatsapp.net/v/t61.24694-24/328772135_1262026404407786_847650240558897214_n.jpg?ccb=11-4&oh=01_AdTBbpt_g_k70Wdoywjwj3ecKVDqQptS4PRctI7_Yk4Z5w&oe=647A9F8F';

// Path to save the downloaded image
const outputPath = 'C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/Images/2.jpg';

// Function to download the image
const downloadImage = async (url, path) => {
  try {
    const response = await axios({
      url,
      responseType: 'stream',
    });

    response.data.pipe(fs.createWriteStream(path));

    return new Promise((resolve, reject) => {
      response.data.on('end', () => {
        resolve();
      });

      response.data.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

// Call the downloadImage function with the specified URL and output path

// downloadImage(imageUrl, outputPath)
//   .then(() => {
//     console.log('Image downloaded successfully.');
//   })
//   .catch((error) => {
//     console.error('Error downloading image:', error);
//   });


module.exports = downloadImage;
