import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createRoutes = (app) => {
    app.use(express.static(path.join(__dirname, '../../client/build')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    });
}

export default createRoutes;