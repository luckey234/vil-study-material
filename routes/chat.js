const express = require("express")
const router = express.Router();
const http=require('http')
const WebSocket = require('ws');
//get api
router.get('/', async (req, res) => {
    try {
        res.status(200).send({
            message: "Chat active ...............",
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Broadcast the message to all clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.send('Welcome to the WebSocket chat server!');
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


module.exports = router

