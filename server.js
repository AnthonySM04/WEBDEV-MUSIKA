const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Client connected');
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
        
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
    console.log('WebSocket server is running on ws://localhost:8080');
});

app.use((req, res, next) => {
    res.setHeader(
        'Permissions-Policy',
        'geolocation=(self), microphone=(), camera=(), fullscreen=(self)'
    );
    next();
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});
