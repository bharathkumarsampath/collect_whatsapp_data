const qrcode = require('qrcode-terminal');

const { Client , LocalAuth} = require('whatsapp-web.js');

const officegen = require('officegen');
const fs = require('fs');

const downloadImage = require('./download');
const randomNumberGenerator = require('./randomgenerator')

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

//connecting with the client, we can chose whatever authentication strategy we want
const client = new Client({
    authStrategy: new LocalAuth()
});

// client.on('authenticated', (session) => {    
//     // Save the session object however you prefer.
//     // Convert it to json, save it to a file, store it in a database...
//     console.log("save the session object however you prefer",session)
// });


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async() => {
    console.log('Client is ready!');
     // number1 = "91" + between(7, 9).toString() + between(9000000000, 9999999999).toString()
        //turkey

        number1 = "9052452565"

        numberofhits = 0

        //const areaCode = ["7","8","9"]

        output = ""

        imageUrl = 'C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/Images/1.jpg'

        outputFilePath = 'C:/Users/bhara/Downloads/peopleswhatsappinfoindia.docx'

        const docx = officegen('docx');

        const pObj = docx.createP();

        for (let i = 0; i < 1000; i++) {


            number = parseInt(number1,10) + i
        // i = 0

        // if(true){
    
            // number = "91" + areaCode [between(0,3)] 
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
        
            // let number_details = await client.isRegisteredUser(number+"@c.us");
            
            const profilepic = await client.getProfilePicUrl(number+"@c.us")
            if(profilepic){
                numberofhits = numberofhits + 1
                const contact = await client.getContactById(number+"@c.us")
                const status = await contact.getAbout()
                //client.sendMessage(number+"@c.us", `Hi there,\nI hope this message finds you well. I came across your contact and wanted to reach out to see if you have any interest in property management services. If you own a property and find it challenging to handle all the management responsibilities on your own, our team is here to help. We specialize in providing comprehensive property management solutions that can make your life easier.\nOur services include handling tenant screening, rent collection, maintenance coordination, and much more. We strive to ensure that property owners like yourself have a hassle-free experience while maximizing the value of your investment.\nIf you're open to exploring this further or would like more information, please let me know. I would be more than happy to provide additional details or answer any questions you may have.\nThank you for your time, and I look forward to hearing from you.\nFor more details, please visit our website at https://www.ssermanpropman.com`);
                //const profilepic = await client.getProfilePicUrl(number+"@c.us")
                output =  "number : " + number  + 
                                  "\n status : " + status  
                                //   " \n profile pic url : " + profilepic + "\n"
                imageUrl = profilepic
                if(profilepic){
                    imagePath = 'C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/USA/'+ number +'.jpg'
                    downloadImage(imageUrl, imagePath)
                        .then(() => {
                            console.log('Image downloaded successfully for - ' + i  + " || number " + number);
                             pObj.addText(output)

                            // // Add an image to the paragraph
                            // pObj.addImage(imagePath);
                        })
                        .catch((error) => {
                            console.error('Error downloading image for - ' + i , error , number);
                    });
                }
                
                // output = output + "number " + number + " exists =>" + number_details + 
                //                   " || status => " + status + 
                //                   " || profile pic => " + profilepic + "\n"
                
            }else{
                // if is not working with only number try with numberWithIndicative
                //output = output + number +" Number is not registered with whatsapp moving with next number =>" + number_details + "\n"
            }
            console.log("Executed flow for  => ", number,i)
            // i = i + 1;
          }

        console.log("number of hits => ".numberofhits)

        // Generate the Word document
        const outputStream = fs.createWriteStream(outputFilePath);

        docx.generate(outputStream);

        outputStream.on('finish', () => {
        console.log('Word document created successfully.');
        });

        outputStream.on('error', (err) => {
        console.error('Error creating Word document:', err);
        });

});

client.on('message', async (message)  => {
	if(message.body === 'ping') {
		
        // number1 = "91" + between(7, 9).toString() + between(9000000000, 9999999999).toString()
        //turkey

        number1 = "18483916396"

        //const areaCode = ["7","8","9"]

        output = ""

        imageUrl = 'C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/Images/1.jpg'

        outputFilePath = 'C:/Users/bhara/Downloads/peopleswhatsappinfoindia.docx'

        const docx = officegen('docx');

        const pObj = docx.createP();

        for (let i = 0; i < 1000; i++) {


            number = parseInt(number1,10) + 1
        // i = 0

        // if(true){
    
            // number = "91" + areaCode [between(0,3)] 
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
            // + between(1,9).toString()
        
            // let number_details = await client.isRegisteredUser(number+"@c.us");
            
            const profilepic = await client.getProfilePicUrl(number+"@c.us")
            if(profilepic){
                const contact = await client.getContactById(number+"@c.us")
                const status = await contact.getAbout()
                //const profilepic = await client.getProfilePicUrl(number+"@c.us")
                output =  "number : " + number  + 
                                  "\n status : " + status  
                                //   " \n profile pic url : " + profilepic + "\n"
                imageUrl = profilepic
                if(profilepic){
                    imagePath = 'C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/USA/'+ number +'.jpg'
                    downloadImage(imageUrl, imagePath)
                        .then(() => {
                            console.log('Image downloaded successfully for - ' + i  + " || number " + number);
                             pObj.addText(output)

                            // // Add an image to the paragraph
                            // pObj.addImage(imagePath);
                        })
                        .catch((error) => {
                            console.error('Error downloading image for - ' + i , error , number);
                    });
                }
                
                // output = output + "number " + number + " exists =>" + number_details + 
                //                   " || status => " + status + 
                //                   " || profile pic => " + profilepic + "\n"
                
            }else{
                // if is not working with only number try with numberWithIndicative
                //output = output + number +" Number is not registered with whatsapp moving with next number =>" + number_details + "\n"
            }
            console.log("Executed flow for  => ", number,i)
            // i = i + 1;
          }

        // Generate the Word document
        const outputStream = fs.createWriteStream(outputFilePath);

        docx.generate(outputStream);

        outputStream.on('finish', () => {
        console.log('Word document created successfully.');
        });

        outputStream.on('error', (err) => {
        console.error('Error creating Word document:', err);
        });

        // const fs = require('fs');
        // fs.writeFile('C:/Users/bhara/Documents/personalprojects/whatsapp_prakash_anna_idea/output2.txt', output, err => {
        //         if (err) {
        //             console.error(err);
        //         }
        //     // file written successfully
        //     });
        // console.log(output);
	}
});

client.on('message', async (msg) => {
    // const mentions = await msg.getMentions();
    
    // for(let contact of mentions) {
    //     console.log(`${contact.pushname} was mentioned`);
    // }

    //console.log("you got a message ")
    

    // number1 = "918106657035"

    // for (let i = 0; i < 10; i++) {

    //     number = parseInt(number1, 10) + i
    
    //     let number_details = await client.isRegisteredUser(number+"@c.us");
    //     if(number_details){
    //         console.log("number "+number+" exists =>",number_details);
    //         const contact = await client.getContactById(number+"@c.us")
    //         const status = await contact.getAbout()
    //         console.log("status => ",status);
    //     }else{
    //         // if is not working with only number try with numberWithIndicative
    //         console.log("Number details returned null object =>",number_details);
    //     }
    //   }

    // number = parseInt(number1, 10) + 1
    
    // let number_details = await client.isRegisteredUser(number+"@c.us");
    // if(number_details){
    //     console.log("number "+number+" exists =>",number_details);
    //     const contact = await client.getContactById(number+"@c.us")
    //     const status = await contact.getAbout()
    //     console.log("status => ",status);
    // }else{
    //     // if is not working with only number try with numberWithIndicative
    //     console.log("Number details returned null object =>",number_details);
    // }
});





client.initialize();
