/**
 * This is the initial file of the aplication,
 * author: francobonaviri@hotmail.com,
 * created: 13/02/2021,
 * update: 13/02/2021
 */

const Server = require('./server');


/**
 * Main function (start the server)
 */
const main = () => {
    // Create the app ->
    const app = new Server(3002);
    // Start the app ->
    app.listen();
}


// play ->
main(); 
