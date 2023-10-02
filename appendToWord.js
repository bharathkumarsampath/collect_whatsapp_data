const officegen = require('officegen');
const fs = require('fs');

// Create a new Word document
const docx = officegen('docx');

function appendToword(imagePath,outputPath,text){

    
        // Path to the image file
        //const imagePath = 'C:/Users/bhara/Downloads/328772135_1262026404407786_847650240558897214_n.jpg'

        // Create a new paragraph
        const pObj = docx.createP();

        //add text
        pObj.addText(text)

        // Add an image to the paragraph
        pObj.addImage(imagePath);

        // Generate the Word document
        const outputPath = 'C:/Users/bhara/Downloads/peopleswhatsappinfo.docx';
        const outputStream = fs.createWriteStream(outputPath);

        docx.generate(outputStream);

        outputStream.on('finish', () => {
        console.log('Word document created successfully.');
        });

        outputStream.on('error', (err) => {
        console.error('Error creating Word document:', err);
        });


}

module.exports = appendToword;
