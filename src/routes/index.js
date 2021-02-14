/**
 * this is the routes file of aplication,
 * author: francobonaviri@hotmail.com,
 * created: 13/02/2021,
 * update: 13/02/2021
*/

const { Router } = require('express');
const sendMailController = require('../controllers/sendMailController')


// Create the router ->
const router = Router();


router.post('/sendEmail', sendMailController.sendEmail )



module.exports = router;



