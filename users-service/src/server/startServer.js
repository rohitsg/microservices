import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import accessEnv from '#root/helpers/accessEnv';
// import setUpRoutes from '#root/server/setUpRoutes'

const PORT = accessEnv('PORT', 7101);

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}));

// setUpRoutes(app);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listings service is listening on ${PORT}`);
});