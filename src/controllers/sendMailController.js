/**
 * mail controller 
 * author: francobonaviri@hotmail.com
 * create: 13/02/2021,
 * update: 13/02/2021 
*/

const MailService = require('../services/mailService')


class SendMailController{

    sendEmail = (req, res) => {
        
        const { message, name, email } = req.body;

        
        MailService.SendEmail(name, message, email);


        return res.json({
            OK: true,
            meg: 'Mensaje enviado'
        });


    }


}

const sendMailController = new SendMailController()
module.exports = sendMailController;
