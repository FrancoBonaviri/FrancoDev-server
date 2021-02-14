/**
 * Server Configuration file ,
 * author: Francobonaviri@hotmail.com,
 * created: 13/02/2021,
 * update: 13/02/2021
 */

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes')
class Server {

    app = null;
    port;


    /**
     * this method create an configurate the server ->
     * @param {Number} port of the app
     */
    constructor(_port = 3000) {
        
        this.port = _port;
        
        // Create the server ->
        this.app = express();

        // Configurate the server ->
        this.config();

    }


    config() {
        // body config ->
        this.app.use( bodyParser.json() );

        // cors cofig ->
        this.app.use( (req, res, next) => {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })

        // Routes ->
        this.app.use('/', router)
    }


    /**
     * This method start the server on the config port
     */
    listen() {
        
        // Running the server ->
        this.app.listen( this.port, () => {
            console.log("Server running on port: " + this.port);
        });
    
    }


}

module.exports = Server

