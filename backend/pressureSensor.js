const express = require('express');

const pressureSensor = express();

pressureSensor.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

pressureSensor.use('/api/pressureSensor', (req, res, next) => {
    const pressures = [
        {
            currentStatus: true,
            readingValue: 32,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 24,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 64,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 67,
            timestamp: Date()
        }
    ];
    res.status(200).json({
        message: 'Pressure sensor connected!',
        pressures: pressures
    });
});

module.exports = pressureSensor;