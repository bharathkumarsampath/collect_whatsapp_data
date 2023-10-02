const fs = require('fs');
const Docxtemplater = require('docxtemplater');
const ImageModule = require('image-module-updated');

// Path to the existing Word file
const existingFilePath = 'path/to/existing/file.docx';

// Path to the image file to be appended
const imagePath = 'path/to/image.jpg';

// Function to append content to the Word file
const appendToWordFile = async () => {
  try {
    // Load the existing Word file
    const existingContent = fs.readFileSync(existingFilePath, 'binary');
    const imageContent = fs.readFileSync(imagePath, 'binary');

    const opts = {
      centered: false,
      getFile: function (tagValue, tagName) {
        if (tagName === 'image') {
          return imageContent;
        }
        return null;
      },
    };

    const imageModule = new ImageModule(opts);
    const doc = new Docxtemplater();
    doc.loadZip(existingContent);
    doc.attachModule(imageModule);

    // Append content to the document
    const data = {
      appendedContent: 'This is the appended content.',
      image: 'image',
    };
    doc.setData(data);
    doc.render();

    // Generate the updated Word document
    const updatedContent = doc.getZip().generate({ type: 'nodebuffer' });

    // Write the updated content to the existing file
    fs.writeFileSync(existingFilePath, updatedContent);

    console.log('Content appended successfully.');
  } catch (error) {
    console.error('Error appending content:', error);
  }
};

// Call the appendToWordFile function
appendToWordFile();
