import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import accessEnv from '../helpers/accessEnv';


const PORT = accessEnv('PORT', 7100);

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('works at 7100');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listings service is listening on ${PORT}`);
});