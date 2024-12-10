const express = require('express');
const API_PORT = process.env.PORT || 5001;

let gyro1LastPoint = { x: 0, y: 0 };
let gyro2LastPoint = { x: 0, y: 0 };

const generateNextGyroscopePoint = (lastPoint) => {

    const deltaX = Math.random() * 0.5;
    const deltaY = Math.random() * 0.5;

    const newX = lastPoint.x + deltaX;
    const newY = lastPoint.y + deltaY;

    const distanceFromLine = Math.abs(newX - newY);
    if (distanceFromLine > 0.5) {
        if (newX > newY) {
            return { x: newY + 0.5, y: newY };
        } else {
            return { x: newX, y: newX + 0.5 };
        }
    }

    return { x: newX, y: newY };
};

const startServer = () => {
    const app = express();

    // * Czujniki odległości (przykładowe dane)
    app.get('/api/distance_sensors', (req, res) => {
        res.send(JSON.stringify({
            value: (Math.random() * 30).toFixed(2),
        }));
    });

    // * Żyroskop nr.1:
    app.get('/api/gyroscope1', (req, res) => {
        const nextPoint = generateNextGyroscopePoint(gyro1LastPoint);
        gyro1LastPoint = nextPoint; 
        res.send(JSON.stringify(nextPoint));
    });

    // * Żyroskop nr.2:
    app.get('/api/gyroscope2', (req, res) => {
        const nextPoint = generateNextGyroscopePoint(gyro2LastPoint);
        gyro2LastPoint = nextPoint; 
        res.send(JSON.stringify(nextPoint));
    });

    // * Enkodery (przykładowe dane)
    app.get('/api/encoders', (req, res) => {
        res.send(JSON.stringify({
            value: (Math.random() * 30).toFixed(2),
        }));
    });

    app.listen(API_PORT, () => {
        console.log(`Server listening on port ${API_PORT}`);
    });
};

startServer();
