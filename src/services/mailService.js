/**
 * Service to send mails,
 * author: francobonaviri@hotmail.com,
 * create: 13/02/2021,
 * update: 13/02/2021 
*/
const nodemailer = require('nodemailer');
require('dotenv').config()

class MailService {

    transporter;
    mailOptions;

    static load() {

        this.transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: process.env.MAIL,
                pass: process.env.KEY_MAIL
            }
        });
            
    }
    

    
    static SendEmail = ( name, message, mail) => {
        this.load();
        this.transporter.sendMail({
            from: 'francobonaviri@hotmail.com',
            to: 'francobonaviri@hotmail.com',
            subject: 'FrancoDev mailservice ',
            text:  `Message: ${message} \n` +
                    `name: ${name} \n`  +
                    `email: ${mail} \n` 
        }, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}




    

module.exports = MailService;






