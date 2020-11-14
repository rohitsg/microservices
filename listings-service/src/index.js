import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('works');
});

app.listen(PORT, () => {
    console.log(`Listings service is listening on ${PORT}`);
});