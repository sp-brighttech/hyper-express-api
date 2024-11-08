import HyperExpress,{Response} from 'hyper-express';
import dotenv from 'dotenv';
dotenv.config();
import { apiReference } from '@scalar/express-api-reference'
import groupRoute from './routes/group.route';
import responseHandler from "./middlewares/response.middleware";
import path from 'path';
import fs from 'fs';

const app = new HyperExpress.Server();

// Use the responseHandler middleware
app.use(responseHandler);

app.get('/', (request,response) => response.json('Welcome to NTS360 backend server'));

app.use('/api', groupRoute);


// Serve the OpenAPI specification file
app.get('/openapi.json', (req, res) => {
    const filePath = path.join(__dirname, '../public/openapi.json'); // Adjust path as necessary
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: 'OpenAPI specification not found' });
        }
        res.set('Content-Type', 'application/json'); // Use set instead of contentType
        res.send(data);
    });
});

app.use(
    '/api-docs',
    apiReference({
        theme: 'purple',
        spec: {
            url: '/openapi.json',
        },
    }),
)

// Middleware to parse JSON data
app.use((req, res, next) => {
    req.json().then(data => {
        req.body = data;
        next();
    }).catch(next);
});

export default app;
